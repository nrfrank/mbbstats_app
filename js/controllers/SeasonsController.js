app.controller('SeasonsController', ['$scope', 'seasons', 
    function($scope, seasons) {
        $scope.selectedGame = 20160310;
        seasons.success(function(data) {
            $scope.data = data.d.results;
        });
    }
]);