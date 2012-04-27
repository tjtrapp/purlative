(function (p) {
    
    p.app.views.ResumeView = Backbone.View.extend({
       
       rootEl: null,
       tagName: "div",
       className: "resume-view",
       
       initialize: function () {
           
           this.rootEl = this.options.root;
           
           p.util.log("init resume view");
           
           return this;
           
       },
       
        render: function () {
           
            var $el = $(this.el),
                $blurb = $("<p class='caption'>Hi, please download my resume.</p>"),
                $head = $("<h3><a target='_blank' href='/resume/tjtrapp_resume_full_2012.pdf'>TJ Trapp's Resume 2012</a></h3>");
               
            $el.append($blurb).append($head);
            
            this.rootEl.html($el);
           
            p.util.log("render resume view");
            return this;
       
        },
        
        remove: function () {
            var $el = $(this.el);
            $el.children().remove();
            $el.remove();
        }
        
    });
    
})(window._PURLATIVE);