"use strict";

angular.module('swagger-editor', [])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/blank',               {templateUrl: 'about:blank'})
            .when('/home',               {templateUrl: 'partials/home.html'})
			
			.when('/import',			{ templateUrl: 'partials/import.html'})
			.when('/export',			{ templateUrl: 'partials/export.html'})
			
			.when('/apis',            {templateUrl: 'partials/apis.html', controller: ApisController})
			.when('/apis/:id',        {templateUrl: 'partials/api.html' , controller: EditApiController})
			.when('/apis/:id/resources',   {templateUrl: 'partials/api-resources.html', controller: ApiResourcesController})
			.when('/apis/:id/models',      {templateUrl: 'partials/api-models.html' , controller: ApiModelsController})

            .otherwise({redirectTo: '/apis'});
    }] )
    .filter('trim', function() {
        return function(s) {
        	if ( s == null ) return "";
        	if ( s.length < 100 ) return s;
        	var i = s.lastIndexOf( ' ', 90 )
            return s.substr( 0, i ) + " (...)";
        };
    })
    ;
    
$(function() {
    $(".nav a").click(function() {
        $(".main-menu li.active").removeClass("active");
        $(this).parent().addClass("active");
    });
});