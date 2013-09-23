(function(factory) {
    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target, jQuery);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        define(['exports', 'module'], function (exports, module){
            var config = module.config();
            if (config.useFactory){
                exports.factory = function (jQuery) {
                    var ko = {};
                    factory(ko, jQuery);
                    return ko;
                };
            } else {
               factory(exports, jQuery);
            }
        });
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {}, jQuery);
    }
}(function(koExports, jQuery){
