/***/ "ab8b5da7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__("5fd44c02");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__("7400a140");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("8f1e0713");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * modal-quest-rewards.js
 * Displays a modal with a rewards list usually used for quests and season rewards
 */

var $ = __webpack_require__("8ee62bea");
var MenuModal = __webpack_require__("fa71fb59"); //TODO this is legacy code, change this for new modal-template.js
var QuestDefs = __webpack_require__("e9b026d5").kQuestDefs;

var kMaxColumnsByRow = 3;
var kMaxWidthRewardList = 880; //px

var ModalQuestsRewards = function () {
    function ModalQuestsRewards() {
        (0, _classCallCheck3.default)(this, ModalQuestsRewards);

        this.modalMainElement = $('#modal-rewards');
        this.title = this.modalMainElement.find('.modal-title');
        this.rewardsListElement = this.modalMainElement.find('#modal-rewards-list');

        this.modal = new MenuModal(this.modalMainElement);
        this.account;

        this.modal.onHide(this.onHide.bind(this));

        this.rewardsAnalyticsData = [];
    }

    (0, _createClass3.default)(ModalQuestsRewards, [{
        key: 'init',
        value: function init(account, localization) {
            this.account = account;
            this.localization = localization;
        }

        /**
         * Will prepare and show rewards modal
         * @param {Array} rewardsList List to show expected to have objs with: Quests: {isQuest: true, questId, xpReward, essenceReward} Other: {img: <url>, reason, xpReward, essenceReward}
         * @param {String} titleLocalizationId Title id to check localization
         * @param {Function} hideCb Callback called when hide
         */

    }, {
        key: 'show',
        value: function show(rewardsList, titleLocalizationId) {
            var redirectSeason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!rewardsList || rewardsList.length < 1) return;

            if (redirectSeason) $('#season-pass-button').trigger('click');
            this.rewardsListElement.html('');
            var title = this.localization.translate(titleLocalizationId);
            this.title.html(title);

            var rewardsLength = rewardsList.length;
            var widthList = kMaxWidthRewardList;
            if (rewardsLength < kMaxColumnsByRow) widthList = rewardsLength * (kMaxWidthRewardList / kMaxColumnsByRow);

            this.rewardsListElement.css({ width: widthList });

            this.rewardsAnalyticsData = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(rewardsList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var reward = _step.value;

                    var objReward = reward;
                    if (reward.isQuest) {
                        var quest = QuestDefs[reward.questId];
                        if (!quest) return;
                        objReward = { img: quest.img, reason: reward.questId, xpReward: reward.xpReward, essenceReward: reward.essenceReward };

                        var objRewardAnalyticsData = {
                            type: 'Quest completed',
                            questId: reward.questId,
                            xpReward: reward.xpReward,
                            essenceReward: reward.essenceReward
                        };
                        this.rewardsAnalyticsData.push(objRewardAnalyticsData);
                    }

                    var rewardHtml = '<div class="quest">\n            <div class="quest-icon" style=\'content: url(' + (objReward.img || '../img/quests/icon-quest-daily.png') + ')\'></div>\n                                <div class=\'quest-name-container\'>\n                                    <div class="quest-name">' + (this.localization.translate(objReward.reason) || objReward.reason) + '</div>\n                                </div>\n                                    <div class=\'quest-rewards\'>\n                                        <div class=\'quest-reward-xp-box\'> \n                                            <div class="icon"></div>\n                                            <span class=\'quest-reward-xp\'>' + objReward.xpReward + '</span>\n                                        </div>\n                                        <div class=\'quest-reward-essence-box\'>\n                                            <div class="icon"></div>\n                                            <span class=\'quest-reward-essence\'>' + objReward.essenceReward + '</span>\n                                        </div>\n                                    </div>\n                                </div>';
                    this.rewardsListElement.append(rewardHtml);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.modal.show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.modal.hide();
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            var _this = this;

            this.account.ajaxRequest(this.account.unlinked ? '/api/user/receive_rewards_unlinked' : '/api/user/receive_rewards', function (err, res) {
                _this.account.loadProfile(true);
                if (res && res.success) {
                    _this.account.getPass(false, null, true);

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = (0, _getIterator3.default)(_this.rewardsAnalyticsData), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var data = _step2.value;

                            _this.account.analytics.economyTransactions(data.type, 0, data.essenceReward, data.questId, '');
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                if (res && res.err) {
                    _this.account.emit('error', err);
                }
            });
            this.rewardsListElement.html('');
        }
    }]);
    return ModalQuestsRewards;
}();

//Singleton


var _ModalQuestsRewards = new ModalQuestsRewards();

module.exports = _ModalQuestsRewards;

/***/ }),

