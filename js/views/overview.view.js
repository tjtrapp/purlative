(function (p) {
    
    p.app.views.OverviewView = Backbone.View.extend({
       
       rootEl: null,
       tagName: "div",
       className: "",
       
       initialize: function () {

           this.rootEl = this.options.root;
           
           p.util.log("init overview view");
           
           return this;

       },
       
       render: function () {
           
           var self = this,
               $el = $(this.el);
           
           p.util.log("kids " + $el.children().length);
           
           this.collection.each(function (model) {
               
               var v = new p.app.views.ContentItemView({
                   root: $el,
                   model: model
               });
               
               v.render();
               
           }, self);
           
           p.util.log("kids " + $el.children().length);
           
           this.rootEl.html($el);
           
           p.util.log("render overview view");
           
           return this;
       },
       
       remove: function () {
           var $el = $(this.el);
           $el.children().remove();
           $el.remove();
       }
        
    });
    
})(window._PURLATIVE);