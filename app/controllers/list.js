app.controller(`ListCtrl`, function($scope, $http){
    $http.get(`list.json`)
    .then((val) =>{
        $scope.list = val.data.list
    })
})
