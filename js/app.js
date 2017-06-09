angular
    .module('myApp', ['ngRoute', 'ngAnimate'])
    .controller('DetailCtrl', function($scope, $routeParams, $http){
        $scope.book = null;
        $http
            .get('/data/books.json')
            .then(function(response){
                let filteredArray = response.data.filter(row => {
                    return row.id === $scope.itemId
                })
            $scope.book = filteredArray[0]
            })
    })
    .controller('AllDetailCtrl', function($scope, $http){
        $http
            .get('/data/books.json')
            .then(function(response){
                $scope.book = response.data
            })
    })