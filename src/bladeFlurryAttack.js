"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * bladeFlurryAttack.js
 * Do a burst of melee attacks
 */

var v2 = require("./c2a798c8.js");

var SkillsEnum = require("./e6306c81.js");
var AnimationData = require("./1c877798.js");

var Anim = AnimationData.EnumPlayerAnimType;
var AttackToNum = AnimationData.AttackIdToNumber;

var BladeFlurryAttack = function () {
    /**
     * Constructor
     * @param {Player} player Class of the current player
     * @param {WeaponManager} weaponManager Class that manages current weapon and attacks
     * @param {Object} attackDef Attack definition, it has the behaviour data
     * @param {Boolean} isOffHand Boolean to know if attack is executed by offhand
     */
    function BladeFlurryAttack(player, weaponManager, attackDef) {
        var isOffHand = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, BladeFlurryAttack);

        //Obligatory attack attributes
        this.id = SkillsEnum.BladeFlurryAttack;
        this.isActive = true;
        this.player = player;
        this.attackDef = attackDef;
        this.isOffHand = isOffHand;
        this.WeaponManager = weaponManager;
        this.timeActive = 0;
        this.timeActiveOld = 0;
        if (!this.isOffHand) this.weaponDef = this.WeaponManager.mainWeaponDef;else this.weaponDef = this.WeaponManager.offHandDef;

        //Melee attack attributes
        this.direction = this.player.dir;
        this.damage = this.attackDef.damage;
        this.cancelable = this.attackDef.cancelable;

        //Special behaviour attributes
        this.damageFrecuency = this.attackDef.behaviourParams.damageFrecuency;
        this.lastDamageTime = this.damageFrecuency;

        this.start();
    }

    /**
     * Start attack
     */


    _createClass(BladeFlurryAttack, [{
        key: 'start',
        value: function start() {}
        //


        /**
         * Updates the current attack behaviour
         * @param {float} dt Delta time since the last call to update
         * @param {Object} toMouseLen Has the direction of the client cursor in a vector: {x: float, y: float}, normalized from -1 to 1
         */

    }, {
        key: 'update',
        value: function update(dt, toMouseLen) {
            this.timeActiveOld = this.timeActive;
            this.timeActive += dt;
            this.lastDamageTime += dt;
            if (this.lastDamageTime >= this.damageFrecuency && this.isActive) {
                this.lastDamageTime = 0;
                if (this.WeaponManager.isRunningOnClient) {
                    this.WeaponManager.checkMeleeCollisionClient();
                }
            }

            return this.isActive;
        }

        /**
         * Changes attack state to finished
         */

    }, {
        key: 'finishAttack',
        value: function finishAttack() {
            this.isActive = false;
        }
    }]);

    return BladeFlurryAttack;
}();

module.exports = BladeFlurryAttack;