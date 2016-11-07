angular.module('recipeApp').component('recipeList', {
    templateUrl: 'recipe-list/recipe-list.template.html',
    controller: function RecipeListController($http) {
        var self = this;
        self.orderProp = "date";

        self.pageClass = function pageClass() {
            self.pageClass = "page-home";
        };

        $http.get('data/recipes.json').then(function (response) {
            self.recipes = response.data;
        });

    }
});