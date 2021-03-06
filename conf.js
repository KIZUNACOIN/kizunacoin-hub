/*jslint node: true */
"use strict";

exports.clientName = 'kizunacoin';
exports.minClientVersion = '2.4.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

// iOS Push Notifications APNS config
exports.APNsAuthKey = ''; // *.p8 filepath or buffer with key itself
exports.keyId = '';
exports.teamId = '';

exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
    "3P3J2HYMVJB2C2EAI34OK5OEXPXISBWP",
    "4DXPAK476DJCY2SYD6Z4ERCWKAKTWFCL",
    "5ZUV6MOG43QK33BDYOHD6Q3A2S5RP562",
    "AG2OMWTVYG6U72V2X2X3JQV33INKDYHR",
    "FP2K6T22CWDNZC3TIDYWAYR2TZSG6UPU",
    "P4AKK7D2T37UXEJALOU2S75XHTFTTP4C",
    "TKUK5PULV2UCIU6OPL7SZXZT5QLSKEIZ",
    "UPMLKFSLJTUPX4MTI2SOBNPI22RWCFB5",
    "WMEQ3MBUXTDJSF3DOGKQTXRMWIFTMICT",
    "XD5MZYUMJDYK3JHMCWRGVBG7QNUADIYB",
    "XUXYY5N6C6C3UEVB4HR2JV4VF4P6BKXC",
    "YG6PVKKDDQL37N6FUHM7ZCJ5ZHD6QGIS"
];


exports.initial_peers = [
	'wss://hub.kizunacoin.jp'
];

// exports.trustedRegistries = {
// 	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
// };

console.log('finished hub conf');
