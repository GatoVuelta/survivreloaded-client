"use strict";


var GameConfig = require("./gameConfig.js");
var util = require("./1901e2d9.js");
var v2 = require("./c2a798c8.js");
var baseDef = require("./45f86a38.js");

var mapDef = {
    biome: {
        colors: {
            background: 0x20536E,
            water: 0x3282ab,
            waterRipple: 0xb3f0ff,
            beach: 0xefb35b,
            riverbank: 0x8a8a8a,
            grass: 0x426609,
            underground: 0x1b0d03,
            playerSubmerge: 0x2b8ca4
        },

        sound: {
            riverShore: 'stone'
        },

        particles: {
            camera: 'falling_leaf_spring'
        }
    }

};

module.exports = util.mergeDeep({}, baseDef, mapDef);
