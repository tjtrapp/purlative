(function (p) { 

    p.app.views.ContentItemView = Backbone.View.extend({
        
        rootEl: null,
        tagName: "div",
        className: "content-item",
        
        initialize: function () {
            
            this.rootEl = this.options.root;
            
            return this;
        },
        
        render: function () { 
            
            var $el = $(this.el);
            
            new p.app.views.PostTimeView({
                root: $el,
                model: this.model
            }).render();
            
            new p.app.views.PostView({
                root: $el,
                model: this.model
            }).render();
            
            this.rootEl.append($el);
            
            p.util.log("rendered ci");
            
            return this;
        }
        
    });

})(window._PURLATIVE);