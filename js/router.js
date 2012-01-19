(function (p) { 

	p.app.Router = Backbone.Router.extend({
		
		initialize: function () {

		},
		
		routes: {
		    "/": "goDefault",
			"/resume": "goResume",
			"*all": "goDefault"
		},

        goResume: function (path) { },
        goDefault: function (path) { }
    
  });
	
})(window._PURLATIVE);