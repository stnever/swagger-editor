angular.module("ApiServiceModule",[])
	.factory('ApiService', function( $http ) {
		var _allApis =  [];
		var _sequence = 1;
		
		var apiService = {
		
			findAll: function() {
				return _allApis;
			},
			
			findByName: function(name) { return _allApis.findFirst( function(api) { return api.name == name; } ) },
			findById  : function(id)   { return _allApis.findFirst( function(api) { return api.id == id; } ) },
			
			save: function(api) {
				if ( api.id == null ) {
					api.id = _sequence;
					_sequence++;
					_allApis.push(api);
				} else {
					var old = findById(api.id);
					angular.copy( api, old );
				}				
			},
			
			remove: function(id) {
				var i = _allApis.findIndexOf(function(api) { return api.id == id });
				if ( i > -1 ) _allApis.splice( i, 1 );
			},
			
			load: function(url, errCallback) {
				return $http.get(url).then(					
					function(response) { apiService.save(response.data); },
					errCallback
				);
			}
		
		};
		
		return apiService;
	});
	
