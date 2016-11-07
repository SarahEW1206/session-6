angular.module('recipeDetail').component('recipeDetail', {
    templateUrl: 'recipe-detail/recipe-detail.template.html',
    controller: ['$http', '$routeParams',
        function RecipeDetailController($http, $routeParams) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };

            self.pageClass = function pageClass() {
                self.pageClass = "page-detail";
            };

            $http.get('data/' + $routeParams.recipeId + '.json').then(function (response) {
                self.recipe = response.data;
                self.setImage(self.recipe.images[0]);
            });

            self.checkItem = function checkItem(index) {
                var ingredients = self.recipe.ingredients
                self.recipe.completedIngredients.push(ingredients[index]);
                ingredients.splice(index, 1);

            };

        }
    ]
});