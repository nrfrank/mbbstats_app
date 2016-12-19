app.directive('teamTable', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      team: '=' 
    }, 
    templateUrl: 'js/directives/teamTable.html',
    link: function(scope) {
        scope.team.allItemsSelected = true;
        
        
        scope.selectPlayer = function () {
                for (var i = 0; i < scope.team.players.length; i++) {
                    if (!scope.team.players[i].selected) {
                        scope.team.allItemsSelected = false;
                        return;
                    }
                }
                scope.team.allItemsSelected = true;
            };
            
            scope.selectAll = function() {
                for (var i = 0; i < scope.team.players.length; i++) {
                    scope.team.players[i].selected = scope.team.allItemsSelected;
                }
            };
        
        // If team is an object...
        // scope.selectPlayer = function () {
            // for (var key in scope.team.players) {
                // if (!scope.team.players.hasOwnProperty(key)) {
                    // console.log(key);
                    // continue;
                // }
                // if (!scope.team.players[key].selected) {
                    // scope.team.allItemsSelected = false;
                    // return;
                // }
            // }
            // scope.team.allItemsSelected = true;
        // }
        
        // scope.selectAll = function() {
            // for (var key in scope.team.players) {
                // if (!scope.team.players.hasOwnProperty(key)) continue;
                // scope.team.players[key].selected = scope.team.allItemsSelected;
            // }
        // }
    }
  }; 
});