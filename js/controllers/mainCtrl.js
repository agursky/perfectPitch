app.controller('mainCtrl', function($scope) {
    
    $scope.gameData = {
        "level": 2, 
        "length": 6,
        "currentSequence": [],
        "controls": []
    }
    
    $scope.userData = {
        'score': 0,
        'currentEntry': []
    }
    
    $scope.sequence = function() {
        $scope.gameData.currentSequence = [];
        $scope.userData.currentEntry = [];
        for (var x = 1; x <= $scope.gameData.length; x+=1) {
            $scope.gameData.currentSequence.push(Math.ceil(Math.random() * $scope.gameData.level));
        }
    }
    
//    $scope.setSequenceWidth = function() {
//        $scope.centerWidth = 74.6 * $scope.gameData.length;
//        $('.display-container').css('width', $scope.centerWidth);
//    }
    
    $scope.renderControls = function() {
        for (var x = 1; x <= $scope.gameData.level; x+=1) {
            $scope.gameData.controls.push(x);
        }
    }
    
    $scope.userEnter = function(el) {
        $scope.userData.currentEntry.push(el);
        console.log('pushing');
    }
    
    
    $scope.init = function() {
        $scope.sequence();
        console.log('in init');
        $scope.renderControls();
    }
    
    
    
}) 