(function (p) {
    
    p.app.models.ContentItems = Backbone.Collection.extend({
       
        initWithSelector: function (sel) {
        
            var $items = $(sel),
                queue = [];
            
            if ($items && $items.length > 0) {
                
                $items.each(function (idx, item) {
                    
                    var $root = $(item),
                        postTime = $root.find(".post-time").html() || "",
                        month = $root.find(".month").html() || "",
                        day = $root.find(".day").html(),
                        caption = $root.find(".caption").html(),
                        actionItem = $root.find(".action-item").html(),
                        contentItem = new p.app.models.ContentItem();
                    
                    contentItem.set({
                        "postTime": postTime,
                        "month": month,
                        "day": day,
                        "caption": caption,
                        "actionItem": actionItem
                    });
                    
                    queue.push(contentItem);
                    
                    contentItem = null;
                    
                });
                
                this.add(queue, {silent:true});
                
                queue = null;
                
            }
            
            return this;
        }
        
    });
    
})(window._PURLATIVE);