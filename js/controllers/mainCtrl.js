app.controller('mainCtrl', function($scope) {
    
    $scope.level = 2;
    $scope.sequenceLength = 2;
    $scope.sequenceArray = [];
    
    $scope.sequence = function() {
        sequenceArray = [];
        for (var x = 0; x <= $scope.sequenceLength; x+=1) {
            $scope.sequenceArray.push(Math.ceil(Math.random() * $scope.level));
        }
        
        console.log($scope.sequenceArray);
    }
    
    $scope.sequence();
    
    
}) 