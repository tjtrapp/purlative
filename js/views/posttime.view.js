(function (p) {
    
    p.app.views.PostTimeView = Backbone.View.extend({
        
        rootEl: null,
        tagName: "time",
        
        initialize: function () {
            this.rootEl = this.options.root;            
            return this;
        },
        
        render: function () {
            
            var $el = $(this.el),
                postTime = this.model.get("postTime"),
                month = this.model.get("month"),
                day = this.model.get("day"),
                markup = "<span class='post-time'>" + postTime + "</span><span class='month'>" + month + "</span><span class='day'>" + day + "</span>";
            
            $el.html(markup);
            
            this.rootEl.append($el);
            
            return this;
        }

    });
    
})(window._PURLATIVE);