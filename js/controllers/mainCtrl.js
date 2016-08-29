app.controller('mainCtrl', function($scope) {
    
    $scope.gameData = {
        "level": 2, 
        "length": 6,
        "currentSequence": []
    }
    
    $scope.sequence = function() {
        $scope.gameData.currentSequence = [];
        for (var x = 1; x <= $scope.gameData.length; x+=1) {
            $scope.gameData.currentSequence.push(Math.ceil(Math.random() * $scope.gameData.level));
        }
    }
    
    $scope.setSequenceWidth = function() {
        $scope.centerWidth = 74 * $scope.gameData.length;
        $('.display-container').css('width', $scope.centerWidth);
    }
    
    
    $scope.init = function() {
        $scope.sequence();
        $scope.setSequenceWidth(); 
    }
    
    
    
}) 