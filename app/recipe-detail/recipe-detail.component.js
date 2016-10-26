angular.module('recipeApp').component('recipeDetail', {
    template: '<p>Detail view for {{ $ctrl.recipeId }}</p>',
    controller: ['$routeParams',
        function RecipeDetailController($routeParams) {
            this.recipeId = $routeParams.recipeId;
        }
    ]
});