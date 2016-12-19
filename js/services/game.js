app.factory('game', ['$http', function($http) {
    return function (file) {
        return $http.get(file)
						.success(function(res) {
							return res;
						})
						.error(function(err) {
							return err;
						});
    };
}]);