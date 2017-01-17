var app = angular.module('appsForDayz', ['ngRoute'])

app.config(($routeProvider, $locationProvider)=>{
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        }).when('/list',{
            controller: 'ListCtrl',
            templateUrl:'partials/list.html'
        }).when('/list/:someVarible',{
            controller: 'DetailCtrl',
            templateUrl: 'partials/detail.html'
        }).otherwise({
            redirectTo:'/'
        })
})

app.controller('MainCtrl', function($scope){
    $scope.appData = "Hi apps For Dayz here!!"
    $scope.functionThing = function () {
        console.log($scope.textbox)
    }
})

app.controller(`ListCtrl`, function($scope, $http){
    $http.get(`list.json`)
    .then((val) =>{
        $scope.list = val.data.list
    })
})

app.controller(`DetailCtrl`, function($scope, $routeParams, $http){
    $scope.thingsToForm = $routeParams.someVarible
    $http.get(`list.json`)
    .then((val)=>{
        let list = val.data.list
        $scope.selItm = list[$scope.thingsToForm]
    })

})
