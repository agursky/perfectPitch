app.controller('mainCtrl', function($scope) {
    
/****Initial Data**************************************/
    
    $scope.init = function() {
        $scope.sequence();
        $scope.renderControls();
        $scope.setNoteBank();
    }
    
    $scope.renderControls = function() {
        for (var x = 1; x <= $scope.gameData.level; x+=1) {
            $scope.gameData.controls.push(x);
        }
    }
    
    $scope.gameData = {
        "level": 1, 
        "length": 6,
        "currentSequence": [],
        "controls": []
    }
    
    $scope.userData = {
        'score': 0,
        'currentEntry': []
    }
    
    $scope.soundArray = [
            'c', 'c_sharp', 'd', 'd_sharp', 'e', 'f', 'f_sharp', 'g', 'g_sharp', 'a', 'a_sharp', 'b'
        ];
    
    $scope.currentNoteBank = [];
    $scope.setNoteBank = function() {
        $scope.currentNoteBank = [];
        for (var x = 0; x <= $scope.gameData.level; x+=1) {
            $scope.currentNoteBank.push($scope.soundArray[x]);
        }
    }
    
/****Sequence**************************************/

    
    $scope.sequence = function() {
        $scope.gameData.currentSequence = [];
        console.log('**************new entry*************');
        for (var x = 1; x <= $scope.gameData.length; x+=1) {
            $scope.newEntry = Math.ceil(Math.random() * $scope.gameData.level);
            $scope.gameData.currentSequence.push($scope.soundArray[$scope.newEntry]);
            console.log($scope.soundArray[$scope.newEntry]);
            
        }
        $scope.resetEntryData();
    }
    
/****User Interaction & Evaluation**************************************/

    
    $scope.currentSequencePos = 0;
    $scope.accuracy = true;
    $scope.entryComplete = false;
    
    $scope.resetEntryData = function() {
        $scope.currentSequencePos = 0;
        $scope.accuracy = true;
        $scope.entryComplete = false;
        $scope.userData.currentEntry = [];
    }
    
    $scope.userEnter = function(el) {
        console.log($scope.currentSequencePos);
        console.log($scope.gameData.length);
        document.getElementById('note_' + el).pause();
        document.getElementById('note_' + el).play();
//        if ($scope.currentSequencePos < $scope.gameData.length - 1) {
//            if(el !== $scope.gameData.currentSequence[$scope.currentSequencePos]) {
//                $scope.accuracy = false;
//            } else {
//                $scope.userData.currentEntry.push(el);
//                $scope.currentSequencePos+=1;
//            }
//        } else if ($scope.currentSequencePos === $scope.gameData.length - 1){
//            $scope.entryComplete = true;
//        }
    }
    
    
    
    
    
    
}) 