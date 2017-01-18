app.controller(`DetailCtrl`, function($scope, $routeParams, $http){
    $scope.thingsToForm = $routeParams.someVarible
    $http.get(`list.json`)
    .then((val)=>{
        let list = val.data.list
        $scope.selItm = list[$scope.thingsToForm]
    })

})
