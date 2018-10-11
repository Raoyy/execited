require.config({
	baseUrl: "js",
	paths: {
　　　	"jquery": "jquery-2.1.4.min",
　　　	"vue": "vue",
　　　	"vue-resource": "vue-resource"
	}
});
require(['jquery', 'vue', 'vue-resource'], function ($, _, Backbone){
　　　　// some code here
});