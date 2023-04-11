"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * crusherAttack.js
 * Do a melee attack and pull enemies to player (with StatusEffect)
 */

var assert = require("./0e566746.js");
var v2 = require("./v2.js");
var SkillsEnum = require("./skillsEnum.js");
var GameObject = require("./gameObject.js");
var StatusEffect = require("./statusEffect.js");
var AnimationData = require("./animationData.js");

var Anim = AnimationData.EnumPlayerAnimType;
var AttackToNum = AnimationData.AttackIdToNumber;

var kDirections = {
    right: 0,
    top: 1,
    left: 2,
    down: 3,
    topRight: 4,
    topLeft: 5,
    downLeft: 6,
    downRight: 7
};
var kMinDiffXY = 2;

var CrusherAttack = function () {
    /**
     * Constructor
     * @param {Player} player Class of the current player
     * @param {WeaponManager} weaponManager Class that manages current weapon and attacks
     * @param {Object} attackDef Attack definition, it has the behaviour data
     * @param {Boolean} isOffHand Boolean to know if attack is executed by offhand
     */
    function CrusherAttack(player, weaponManager, attackDef) {
        var isOffHand = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, CrusherAttack);

        //Obligatory attack attributes
        this.id = SkillsEnum.CrusherAttack;
        this.isActive = true;
        this.player = player;
        this.attackDef = attackDef;
        this.isOffHand = isOffHand;
        this.WeaponManager = weaponManager;
        this.timeActive = 0;
        this.timeActiveOld = 0;
        if (!this.isOffHand) this.weaponDef = this.WeaponManager.mainWeaponDef;else this.weaponDef = this.WeaponManager.offHandDef;

        //Melee attack attributes
        this.direction = v2.copy(this.player.dir);
        this.damage = this.attackDef.damage;
        this.cancelable = this.attackDef.cancelable;
        this.maxHits = false;

        //Special behaviour attributes


        this.start();
    }

    /**
     * Start attack
     */


    _createClass(CrusherAttack, [{
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
            if (this.isActive && !this.WeaponManager.isRunningOnClient) {
                this.applyEffectToNearbyPlayers();
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

    return CrusherAttack;
}();

module.exports = CrusherAttack;
