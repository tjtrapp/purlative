window._PURLATIVE = {};
    
(function (p, $, console) { 

    p.app = {};
    p.app.views = {};
    p.app.models = {};
    
    p.util = {};
    
    p.util.log = (console && $.isFunction(console.log) ? function (m) { console.log(m); } : $.noop);
    
    
})(window._PURLATIVE, jQuery, window.console);
