var BrotherPrinter = function () {}
BrotherPrinter.prototype = {
    findNetworkPrinters: function (callback, scope) {
        var callbackFn = function () {
            var args = typeof arguments[0] == 'boolean' ? arguments : arguments[0]
            callback.apply(scope || window, args)
        }
        cordova.exec(callbackFn, null, 'BrotherPrinter', 'findNetworkPrinters', [])
    },

    findBluetoothPairedPrinters : function(callback, scope){
        var callbackFn = function(){
            var args = typeof arguments[0]== 'boolean' ? arguments: arguments[0]
            callback.apply(scope || window, args)
        }
        cordova.exec(callbackFn, null, 'BrotherPrinter', 'findBluetoothPairedPrinters', [])
    },

    printViaSDK: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects a bitmap.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'printViaSDK', [data])
    },
    printViaWifiInfra: function (data, callback) {
        if (!data || !data.length) {
            console.log('No data passed in. Expects a bitmap.')
            return
        }
        cordova.exec(callback, function(err){console.log('error: '+err)}, 'BrotherPrinter', 'printViaWifiInfra', [data])
    }
}
var plugin = new BrotherPrinter()
module.exports = plugin
