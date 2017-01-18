app.controller('MainCtrl', function($scope){
    $scope.appData = "Hi apps For Dayz here!!"
    $scope.functionThing = function () {
        console.log($scope.textbox)
    }
})
