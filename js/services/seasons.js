app.factory('seasons', ['$http', function($http) {
    return $http.get("seasons.json")
		.success(function(res) {
			return res;
		})
		.error(function(err) {
			return err;
		});
    }
]);