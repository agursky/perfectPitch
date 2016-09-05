app.controller('mainCtrl', function($scope, $interval, $timeout) {
    
/****Initial Data**************************************/
    
    $scope.init = function() {
        $scope.sequence();
        $scope.renderControls();
    }//initiate data
    
    $scope.renderControls = function() {
        $scope.gameData.controls = [];
        for (var x = 0; x < $scope.gameData.level; x+=1) {
            $scope.gameData.controls.push($scope.soundArray[x]);
        }
    }//Creates user controls based on what level the user is up to.
    
    $scope.gameData = {
        "level": 4, 
        "length": 3,
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
    
/****Sequence**************************************/

    
    $scope.sequence = function() {
        $scope.gameData.currentSequence = [];
        for (var x = 1; x <= $scope.gameData.length; x+=1) {
            $scope.newEntry = Math.ceil(Math.random() * $scope.gameData.level) - 1;
            $scope.gameData.currentSequence.push($scope.soundArray[$scope.newEntry]);
        }
        $timeout(function() {
            $scope.playSequenceNotes();
        }, 1500)
        
        $scope.resetEntryData();
        console.log($scope.gameData.currentSequence);
        
    }//generates new sequence array. sequence is based on random number generated within range determined by what level the user is on.
    
    $scope.playSequenceNotes = function() {
        $scope.itr = 0;
        document.getElementById('note_' + $scope.gameData.currentSequence[$scope.itr]).play();
        $scope.itr+=1;
        $interval(function() {
            document.getElementById('note_' + $scope.gameData.currentSequence[$scope.itr]).play();
            $scope.itr+=1;
        }, 3000, $scope.gameData.length - 1);
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
        $scope.currentNote = document.getElementById('note_' + el);
        $scope.currentNote.pause();
        $scope.currentNote.currentTime = 0;
        $scope.currentNote.play();
        console.log($scope.currentSequencePos);
        console.log($scope.gameData.length);
        if(el !== $scope.gameData.currentSequence[$scope.currentSequencePos]) {
                $scope.accuracy = false;
        } else if ($scope.currentSequencePos < $scope.gameData.length - 1) {
            $scope.userData.currentEntry.push(el);
            $scope.currentSequencePos+=1;
        } else if ($scope.currentSequencePos === $scope.gameData.length - 1) {
            $scope.userData.currentEntry.push(el);
            $scope.entryComplete = true;
        }
    }//plays notes that user plays, and evaluates them against the generated sequence for accuracy.

    
}) 