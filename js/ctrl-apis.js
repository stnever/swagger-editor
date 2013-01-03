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
}
