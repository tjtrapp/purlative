(function (p) {
    
    p.app.models.ContentItem = Backbone.Model.extend({
        
        defaults: {
            "postTime": "11:30 am",
            "month": "January",
            "day": "18",
            "caption": "",
            "body": ""
        }
        
    });
    
})(window._PURLATIVE);