
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-ionic.common",
          "file": "plugins/cordova-plugin-ionic/dist/common.js",
          "pluginId": "cordova-plugin-ionic",
        "clobbers": [
          "IonicCordova"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open",
          "window.open"
        ]
        },
      {
          "id": "cordova-plugin-ionic.guards",
          "file": "plugins/cordova-plugin-ionic/dist/guards.js",
          "pluginId": "cordova-plugin-ionic",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-inappbrowser": "3.2.0",
      "cordova-plugin-ionic": "5.4.6"
    };
    // BOTTOM OF METADATA
    });
    