"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * spreadShot.js
 * Will define de direction of the current bullet, 
 * then the baseBullet.js will manage the updates and collisions
 */

//Imports
var v2 = require("./c2a798c8.js");
var BaseBullet = require("./ea2f7f0c.js");
var BehaviourEnum = require("./b2f0419a.js");
var BehaviourMethods = require("./7b4c6cc8.js");

var SpreadShot =
/**
 * Constructor
 * @param {bulletBarn} bulletManager Class that manages all the bullets active
 * @param {Number} id Id of bullet in bulletBarn
 * @param {Object} params Object with all the necessary parameters to control the bullet
 */
function SpreadShot(bulletManager, id, params) {
   _classCallCheck(this, SpreadShot);

   //Calculate direction and let baseBullet behaviour do the rest
   if (!bulletManager.isRunningOnClient && params.attackDef.numBullets && params.attackDef.numBullets > 1) params.dir = v2.copy(BehaviourMethods.addCicularSpread(params.dir, params.behaviourParams.bulletAttackCount, params.attackDef.numBullets, params.bulletDef.behaviour.angle));

   return new BaseBullet(bulletManager, id, params, BehaviourEnum.SpreadShot);
};

module.exports = SpreadShot;
