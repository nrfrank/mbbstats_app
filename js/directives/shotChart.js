app.directive('shotChart', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      team: '=' 
    }, 
    templateUrl: 'js/directives/shotChart.html',
    link: function (scope) {
        scope.tooltop = {
            pid: 0
        }
        scope.updateToolTip = function(sh) {
            if (sh.player_id) {
                scope.tooltip = {
                    pid: sh.player_id,
                    shooter: sh['first-name'].slice(0,1) + ". " + sh['last-name'],
                    defender: sh['defender-first-name'].slice(0,1) + ". " + sh['defender-last-name'],
                    clock: sh.CLOCK,
                    dribbles: sh.dribbles,
                    xloc: sh["x-coordinate"],
                    yloc: sh["y-coordinate"]
                }
            } else {
                scope.tooltip = {}
            }
        }
    }
  }; 
});