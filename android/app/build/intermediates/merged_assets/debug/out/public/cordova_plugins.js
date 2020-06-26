
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-firebase-authentication.FirebaseAuthentication",
          "file": "plugins/cordova-plugin-firebase-authentication/www/FirebaseAuthentication.js",
          "pluginId": "cordova-plugin-firebase-authentication",
        "merges": [
          "cordova.plugins.firebase.auth"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-firebase-authentication": "3.3.0",
      "cordova-support-android-plugin": "1.0.2",
      "cordova-support-google-services": "1.4.0"
    };
    // BOTTOM OF METADATA
    });
    