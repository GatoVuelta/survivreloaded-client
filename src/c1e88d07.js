"use strict";


var GameConfig = require("./gameConfig.js");
var util = require("./1901e2d9.js");
var v2 = require("./c2a798c8.js");
var baseDef = require("./d5ec3c16.js");

var mapDef = {
    assets: {
        audio: [{ name: 'club_music_01', channel: 'ambient' }, { name: 'club_music_02', channel: 'ambient' }, { name: 'ambient_steam_01', channel: 'ambient' }, { name: 'cluck_01', channel: 'sfx' }, { name: 'cluck_02', channel: 'sfx' }, { name: 'feather_01', channel: 'sfx' }, { name: 'xp_pickup_01', channel: 'ui' }, { name: 'xp_pickup_02', channel: 'ui' }, { name: 'xp_drop_01', channel: 'sfx' }, { name: 'xp_drop_02', channel: 'sfx' }, { name: 'pumpkin_break_01', channel: 'sfx' }]
    },

    gameMode: {
        turkeyMode: true
    }

};

module.exports = util.mergeDeep({}, baseDef, mapDef);
