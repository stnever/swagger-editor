function ApisController( $rootScope, $scope, ApiService ) {

	$rootScope.help = {
		header: "API Listing",
		contents: "This page displays all the APIs in the current session. You can create a new API or import one from an URL using the \"Import\" link above."
	}

	$scope.apis = ApiService.findAll();
	
	$scope.editApi = function(api) { $scope.currentApi = angular.copy(api); }
	$scope.newApi  = function()    { $scope.currentApi = {}; }
	$scope.saveApi = function() {
		ApiService.save( $scope.currentApi );
		$scope.currentApi = null;
		$("#popApi").modal('hide');
	}
	$scope.confirmDelete = function(api) { $scope.apiToDelete = api; }
	$scope.deleteApi = function() {
		ApiService.remove( $scope.apiToDelete.id );
		$("#popConfirmDeleteApi").modal('hide');
	}
	
	// puts focus on each modal's first input when it is shown
	$("#popApi").on("shown", function() { $(this).find("input").get(0).focus(); });
	$("#popConfirmDeleteApi").on("shown", function() { $(this).find(".btn").get(0).focus(); });
}

function ApiResourcesController( $scope ) {
	$scope.api = {
		resources: [
			{ path: "/user", summary: "User operations" },
			{ path: "/roles", summary: "Role operations" }
		]
	}
}

function ApiModelsController( $scope ) {
	$scope.api = {
		"models":{"User":{"id":"User","properties":{"id":{"type":"long"},"lastName":{"type":"string"},"phone":{"type":"string"},"username":{"type":"string"},"email":{"type":"string"},"userStatus":{"allowableValues":{"valueType":"LIST","values":["1-registered","2-active","3-closed"],"valueType":"LIST"},"description":"User Status","type":"int"},"firstName":{"type":"string"},"password":{"type":"string"}}},
		
		"Category":{"id":"Category","properties":{"id":{"type":"long"},"name":{"type":"string"}}},
		
		"Pet":{"id":"Pet","properties":{"tags":{"items":{"$ref":"Tag"},"type":"Array"},"id":{"type":"long"},"category":{"type":"Category"},"status":{"allowableValues":{"valueType":"LIST","values":["available","pending","sold"],"valueType":"LIST"},"description":"pet status in the store","type":"string"},"name":{"type":"string"},"photoUrls":{"items":{"type":"string"},"type":"Array"}}},
		
		"Tag":{"id":"Tag","properties":{"id":{"type":"long"},"name":{"type":"string"}}}
		}
	}
	
	$scope.primitives = [ "string", "boolean", "date", "int", "long", "float", "double", "byte" ];
	$scope.containers = [ "List", "Set", "Array" ];
	
	$scope.editProp = function(prop) {
		$scope.selectedProp = prop;
		$("#popProperty").modal("show");
	}
}
