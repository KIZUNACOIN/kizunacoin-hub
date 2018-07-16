/*jslint node: true */
"use strict";

exports.clientName = 'kizunacoin';
exports.minClientVersion = '2.4.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

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
        "3UGHZ7EUIYWIIHS3RKW5RFWGY4ZWMBFY",
        "7KUZJFGDUEX3S6PQ6PYIZP4WECWQPYJL",
        "AMIKMITEVWCCSKPFDPFQCAAD7IS2W7AJ",
        "CWMNDTB2BFUL26NJ5Y26ZK7T6U3AIOCT",
        "IHGYL4VPAS7FEAHUUVIYJQUXBG3D43QF",
        "JQNX726UPCGOBIWQGPAXUPPJKHFKLTIP",
        "KCG6MTD46TE7723JYAP74O3YME6Z57GQ",
        "RFAFJ5CJXJYBLIW47TLCDJZMUP5L5SZH",
        "UT37GXN7U6WKYIVCQDP74VNMDLVU7QGW",
        "WSWDDBA7I2Q7QDMOHEKBPSMA75G56SKU",
        "XO4GJOOGOLXUSG2Q5OEPDBA5BGMEQVBR",
        "Y3T5AIA46PDGFNKZSXOIEHUTGHK3BTFF"
];

/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

exports.initial_peers = [
	'wss://hub.kizunacoin.jp'
];

exports.trustedRegistries = {
	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
};

console.log('finished hub conf');
