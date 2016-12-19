app.controller('GameController', ['$scope', '$filter', 'groupByFilter', 'game', 
    function($scope, $filter, groupBy, game) {
        $scope.$watch('selectedGame', function() {
            $scope.thisGame = $scope.selectedGame;
            var dataUrl = "./game_data/" + parseInt($scope.thisGame) + ".json";
            game(dataUrl).success(function(data) {
                if (typeof $scope.home !== "undefined") {
                    delete $scope.home;
                }
                if (typeof $scope.away !== "undefined") {
                    delete $scope.away;
                }
                var homeArray = $.map(groupBy($filter('filter')(data.d.results, {team: "home"}), 'player_id'), function(value, index) {
                    return [value];
                });
                var awayArray = $.map(groupBy($filter('filter')(data.d.results, {team: "visitors"}), 'player_id'), function(value, index) {
                    return [value];
                });
                $scope.home = {
                    "players": homeArray,
                    "team": data.d.results[0].HOME_CITY,
                    "allItemsSelected": true
                };
                
                $scope.away = {
                    "players": awayArray,
                    "team": data.d.results[0].VIST_CITY,
                    "allItemsSelected": true
                };
            });
        });
    }
]);