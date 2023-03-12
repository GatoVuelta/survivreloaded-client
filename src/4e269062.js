"use strict";


var GameConfig = require("./989ad62a.js");
var util = require("./1901e2d9.js");
var v2 = require("./c2a798c8.js");
var baseDef = require("./d5ec3c16.js");

var mapDef = {

    mapId: 8,

    desc: {
        name: 'Snow',
        icon: 'img/loot/loot-throwable-snowball.svg',
        buttonCss: 'btn-mode-snow'
    },

    assets: {
        audio: [{ name: 'snowball_01', channel: 'sfx' }, { name: 'snowball_02', channel: 'sfx' }, { name: 'snowball_pickup_01', channel: 'ui' }],

        atlases: ['gradient', 'loadout', 'shared', 'snow']
    },

    biome: {
        colors: {
            background: 0x093639,
            water: 0x9BE2FF,
            waterRipple: 0xb3f0ff,
            beach: 0xA1BDC9,
            riverbank: 0xA1BDC9,
            grass: 0xbdbdbd,
            underground: 0x1b0d03,
            playerSubmerge: 0x2b8ca4,
            playerGhillie: 0xc1c1c1
        },

        particles: {
            camera: 'falling_snow_fast'
        },

        airdrop: {
            planeImg: 'map-plane-01.img',
            planeSound: 'plane_01',
            airdropImg: 'map-chute-01.img'
        },

        frozenSprites: ['player-snow-01.img', 'player-snow-02.img', 'player-snow-03.img']
    },

    gameMode: {
        snowMode: true
    }

};

module.exports = util.mergeDeep({}, baseDef, mapDef);
