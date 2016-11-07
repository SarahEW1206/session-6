var app = angular.module('recipeApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<recipe-list></recipe-list>',
                    controller: "MainCtrl"
                }).
                when('/recipes/:recipeId', {
                    template: '<recipe-detail></recipe-detail>',
                    controller: "DetailCtrl"
                }).
                otherwise('/recipes');
        }
    ]);

app.controller("MainCtrl", function ($scope) {
    $scope.pageClass = "page-home";
});
app.controller("DetailCtrl", function ($scope) {
    $scope.pageClass = "page-detail";
});