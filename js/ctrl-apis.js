var _allApis = [
	{ id: 1, name: "Users API", basePath: "/users", description: "Manage users" },
	{ id: 2, name: "Pets API", basePath: "/pets", description: "Manage pets" }
];

function ApisController( $scope ) {
	$scope.apis = _allApis;
}

function EditApiController( $scope, $routeParams ) {
	$scope.api = findFirst( _allApis, function(a) { return a.id == $routeParams.id } );
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
