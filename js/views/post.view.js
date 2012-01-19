(function (p) {
    
    p.app.views.PostView = Backbone.View.extend({
        
        rootEl: null,
        tagName: "article",
        className: "post",
        
        initialize: function () {
            this.rootEl = this.options.root;  
            return this;          
        },
        
        render: function () {
            
            var $el = $(this.el),
                caption = this.model.get("caption"),
                $p = $("<p class='caption'>" + caption + "</p>"),                
                actionItem = this.model.get("actionItem"),
                $aI = (actionItem && actionItem.length > 0) ? "<div class='action-item'>" + actionItem + "</div>" : null;
                
            $el.html($p);
            if ($aI) { $el.append($aI); }
            
            this.rootEl.append($el);
            
            return this;
            
        }

    });
    
})(window._PURLATIVE);