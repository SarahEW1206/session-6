angular.module('recipeApp').config(
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
                template: '<recipe-list></recipe-list>'
            }).
            when('/recipes/:recipeId', {
                template: '<recipe-detail></recipe-detail>'
            }).
            otherwise('/recipes');
    });