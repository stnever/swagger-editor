Array.prototype.findIndexOf = function(f) {
	for ( var i = 0; i < this.length; i++ )
		if ( f( this[i] ) )
			return i;
	return -1;
}

Array.prototype.findFirst = function(f) {
	var i = this.findIndexOf(f);
	return ( i < 0 ) ? null : this[i];
}

angular.module('swagger-editor', [ "ApiServiceModule" ])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/blank',               {templateUrl: 'about:blank'})
			
			.when('/import',			{ templateUrl: 'partials/import.html'})
			.when('/export',			{ templateUrl: 'partials/export.html'})
			
			.when('/apis',            {templateUrl: 'partials/apis.html', controller: ApisController})
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
	.run(function( $rootScope, ApiService ) {
		ApiService.load( "samples/users/api-docs.json" )
			.then( function() { ApiService.load( "samples/pets/api-docs.json" ) } );
	});
    ;
    
$(function() {
    $(".nav a").click(function() {
        $(".main-menu li.active").removeClass("active");
        $(this).parent().addClass("active");
    });
});