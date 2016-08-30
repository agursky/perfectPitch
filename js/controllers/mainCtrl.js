app.controller('mainCtrl', function($scope) {
    
/****Initial Data**************************************/
    
    $scope.init = function() {
        $scope.sequence();
        $scope.renderControls();
    }
    
    $scope.renderControls = function() {
        for (var x = 1; x <= $scope.gameData.level; x+=1) {
            $scope.gameData.controls.push(x);
        }
    }
    
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
    
/****Sequence**************************************/

    
    $scope.sequence = function() {
        $scope.gameData.currentSequence = [];
        $scope.userData.currentEntry = [];
        for (var x = 1; x <= $scope.gameData.length; x+=1) {
            $scope.gameData.currentSequence.push(Math.ceil(Math.random() * $scope.gameData.level));
        }
        $scope.resetEntryData();
    }
    
/****User Interaction & Evaluation**************************************/

    
    $scope.currentSequencePos = 0;
    $scope.accuracy = true;
    
    $scope.resetEntryData = function() {
        $scope.currentSequencePos = 0;
        $scope.accuracy = true;
        $scope.userData.currentEntry = [];
    }
    
    $scope.userEnter = function(el) {
        if(el !== $scope.gameData.currentSequence[$scope.currentSequencePos]) {
            $scope.accuracy = false;
        } else {
            $scope.userData.currentEntry.push(el);
            $scope.currentSequencePos+=1;
        }
    }
    
    
    
    
    
    
}) 