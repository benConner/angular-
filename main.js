var app = angular.module('appsForDayz', ['ngRoute'])

app.config(($routeProvider)=>{
    $routeProvider
        .when('/', {
                controller: 'MainCtrl',
                templateUrl: 'partials/main.html'
        }).when('/list',{
            controller: 'ListCtrl',
            templateUrl:'partials/list.html'
        })
})

app.controller('MainCtrl', function($scope){
    $scope.appData = "Hi apps For Dayz here!!"
})

app.controller(`ListCtrl`, function($scope, $http){
    $http.get(`list.json`)
    .then((val) =>{
        $scope.list = val.data.list
    })
})
