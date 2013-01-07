(function (w, d) {

    function getElementsByClassName(startNode, className) {
        
        var matches = [],
            elements,
            regEx = new RegExp("(^|\\s)" + className + "(\\s|$)"); // from eJohns page on getElementsByClassName
            
        if (!startNode) {
            startNode = d;
        }
        
        // we want all elements
        elements = startNode.getElementsByTagName("*");
        
        for (var el = null, idx = 0, len = elements.length; idx < len; idx++) {
            
            el = elements[idx];
            
            if (el && regEx.test(el.className)) {
                matches.push(el);
            }
            
        }
        
        return matches;
        
    }
    
    // export
    w.getElementsByClassName = getElementsByClassName;
    
})(window, document);
