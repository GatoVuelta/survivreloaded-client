"use strict";


var _stringify = __webpack_require__("1f15ac6e");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__("7400a140");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("8f1e0713");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameConfig = __webpack_require__("989ad62a");
var util = __webpack_require__("1901e2d9");
var device = __webpack_require__("ce29f17f");
var helpers = __webpack_require__("26be8056");
var webview = __webpack_require__("f4d48896");

var kConfigVersion = 1;
var MobileRemovedRegions = ['sa', 'kr'];

var DefaultConfig = {
    muteAudio: false,
    masterVolume: 1.0,
    soundVolume: 1.0,
    musicVolume: 1.0,
    highResTex: true,
    screenShake: true,
    anonPlayerNames: false,
    touchMoveStyle: 'anywhere',
    touchAimStyle: 'anywhere',
    touchAimLine: true,
    profile: null,
    region: 'na',
    gameModeIdx: 2,
    teamAutoFill: true,
    gameModeSelected: null,
    language: '',
    prerollGamesPlayed: 0,
    totalGamesPlayed: 0,
    promptAppRate: true,
    cookiesConsented: true,
    regionSelected: false,
    lastNewsTimestamp: 0,
    perkModeRole: '',
    loadId: '',
    unloadId: '',
    regularAnalogs: true,
    sensitivity: 1.0,
    progressNotificationActive: true,
    beforeBuyContext: null
};

//
// Config
//

var Config = function () {
    function Config() {
        (0, _classCallCheck3.default)(this, Config);

        this.loaded = false;
        this.localStorageAvailable = true;
        this.config = {};
        this.onModifiedListeners = [];
    }

    (0, _createClass3.default)(Config, [{
        key: 'load',
        value: function load(onLoadCompleteCb) {
            var _this = this;

            var onLoaded = function onLoaded(strConfig) {
                var data = {};
                try {
                    data = JSON.parse(strConfig);
                } catch (err) {
                    // Ignore
                }
                _this.config = util.mergeDeep({}, DefaultConfig, data);
                if (device.mobile && MobileRemovedRegions.indexOf(_this.config.region) !== -1) {
                    _this.set('region', 'na');
                    _this.config.region = 'na';
                }
                _this.checkUpgradeConfig();
                _this.onModified();
                _this.loaded = true;
                onLoadCompleteCb();
            };

            if (device.webview && webview.hasNativeStorage()) {
                webview.storageGetItem('surviv_config', function (err, data) {
                    if (err) {
                        console.log('Failed loading config');
                        onLoaded({});
                    } else {
                        onLoaded(data);
                    }
                });
            } else {
                var storedConfig = {};
                try {
                    storedConfig = localStorage.getItem('surviv_config');
                } catch (err) {
                    this.localStorageAvailable = false;
                }
                onLoaded(storedConfig);
            }
        }
    }, {
        key: 'store',
        value: function store() {
            var strData = (0, _stringify2.default)(this.config);
            if (device.webview && webview.hasNativeStorage()) {
                webview.storageSetItem('surviv_config', strData, function (err, data) {
                    if (err) {
                        console.log('Failed storing config');
                    } else {
                        /* success */
                    }
                });
            } else if (this.localStorageAvailable) {
                // In browsers, like Safari, localStorage setItem is
                // disabled in private browsing mode.
                // This try/catch is here to handle that situation.
                try {
                    localStorage.setItem('surviv_config', strData);
                } catch (e) {
                    // Ignore
                }
            }
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (!key) {
                return;
            }
            var path = key.split('.');
            var elem = this.config;
            while (path.length > 1) {
                elem = elem[path.shift()];
            }
            elem[path.shift()] = value;

            this.store();
            this.onModified(key);
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                return undefined;
            }

            var path = key.split('.');
            var elem = this.config;
            for (var i = 0; i < path.length; i++) {
                elem = elem[path[i]];
            }
            return elem;
        }
    }, {
        key: 'addModifiedListener',
        value: function addModifiedListener(fn) {
            this.onModifiedListeners.push(fn);
        }
    }, {
        key: 'onModified',
        value: function onModified(key) {
            for (var i = 0; i < this.onModifiedListeners.length; i++) {
                this.onModifiedListeners[i](key);
            }
        }
    }, {
        key: 'checkUpgradeConfig',
        value: function checkUpgradeConfig() {
            var version = this.get('version');

            // @TODO: Put upgrade code here

            this.set('version', kConfigVersion);
        }
    }]);
    return Config;
}();

module.exports = Config;