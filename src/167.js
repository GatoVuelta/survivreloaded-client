/***/ "97507a20":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * heavyAttackSword.js
 * Do a melee attack without any previous special behaviour
 * The damage of the attack is calculated based on the hold time of the attack
 */

var v2 = __webpack_require__("c2a798c8");
var math = __webpack_require__("10899aea");

var SkillsEnum = __webpack_require__("e6306c81");
var AnimationData = __webpack_require__("1c877798");

var Anim = AnimationData.EnumPlayerAnimType;
var AttackToNum = AnimationData.AttackIdToNumber;

var HeavyAttackSword = function () {
    /**
     * Constructor
     * @param {Player} player Class of the current player
     * @param {WeaponManager} weaponManager Class that manages current weapon and attacks
     * @param {Object} attackDef Attack definition, it has the behaviour data
     * @param {Boolean} isOffHand Boolean to know if attack is executed by offhand
     * @param {Float} attackHoldTime Hold attack time, to calculate the damage of attack
     */
    function HeavyAttackSword(player, weaponManager, attackDef) {
        var isOffHand = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var attackHoldTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, HeavyAttackSword);

        //Obligatory attack attributes
        this.id = SkillsEnum.HeavyAttackSword;
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

        //Special behaviour attributes
        var minChargeTime = this.player.isTouch() ? this.attackDef.behaviourParams.minChargeTimeTouch : this.attackDef.behaviourParams.minChargeTime;
        var maxChargeTime = this.player.isTouch() ? this.attackDef.behaviourParams.maxChargeTimeTouch : this.attackDef.behaviourParams.maxChargeTime;

        this.damage = this.attackDef.behaviourParams.maxDamage * (math.clamp(attackHoldTime, minChargeTime, maxChargeTime) / maxChargeTime);
        this.maxHits = false;
        this.cancelable = this.attackDef.cancelable;

        this.start();
    }

    /**
     * Start attack
     */


    _createClass(HeavyAttackSword, [{
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

    return HeavyAttackSword;
}();

module.exports = HeavyAttackSword;

/***/ }),

