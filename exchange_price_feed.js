/*jslint node: true */
'use strict';
const async = require('async');
const request = require('request');
const eventBus = require('core/event_bus.js');
const network = require('core/network.js');

const rates = {};

function updateBitZRates(state, onDone) {
    const apiUri = 'https://apiv2.bitz.com/Market/coinRate?coins=kiz';
    request(apiUri, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let arrCoinInfos = JSON.parse(body).data.kiz;
            rates['KIZ_USD'] = arrCoinInfos.usdt;
            state.updated = true;
        } else {
            console.log("Can't get currency rates from BitZ");
        }
        onDone();
    });
}


function updateRates() {
    let state = {updated: false};
    async.series([
        function (cb) {
            updateBitZRates(state, cb);
        },
    ], function () {
        console.log(rates);
        if (state.updated)
            broadcastNewRates();
    });
}

function broadcastNewRates() {
    network.sendAllInboundJustsaying('exchange_rates', rates);
}

eventBus.on('client_logged_in', function (ws) {
    if (Object.keys(rates).length > 0)
        network.sendJustsaying(ws, 'exchange_rates', rates);
});

updateRates();
setInterval(updateRates, 1000 * 60 * 5);

exports.rates = rates;
