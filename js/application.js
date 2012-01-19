(function (p) {
    
    p.app.PurlativeApplication = Backbone.View.extend({
        
        models: {},
        views: {},
        el: $(".content"),
        
        initialize: function () {
            
            this.models.contentItems = new p.app.models.ContentItems();
            this.models.contentItems.initWithSelector(".content-item");
            
            this.views.resumeView = new p.app.views.ResumeView({
                root: this.el
            });
            
            this.views.overviewView = new p.app.views.OverviewView({
                root: this.el,
                collection: this.models.contentItems
            });
            
            this.router = new p.app.Router();
            this.bindRoutes(this.router);			
            Backbone.history.start();
            return this;
            
        },

        render: function () {

            return this;
        },
        
        renderOverview: function () {
            
            if (this.views.resumeView) {
                this.views.resumeView.remove();
            }
            
            this.views.overviewView.remove();
            this.views.overviewView.render();
            
        },
        
        renderResume: function () {
            
            if (this.views.overviewView) {
                this.views.overviewView.remove();
            }
            
            this.views.resumeView.remove();
            this.views.resumeView.render();
            
        },
        
        bindRoutes: function (router) {

            var self = this;
            
            router.bind("route:goResume", function () { 
                p.util.log("route:goResume");
                self.renderResume();
            });
            
            router.bind("route:goDefault", function () {
                p.util.log("route:goDefault");
                self.renderOverview();
            })

        }
        
    });
    
})(window._PURLATIVE);