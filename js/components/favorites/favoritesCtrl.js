myWeatherApp.controller('favoritesCtrl', favoritesController);

favoritesController.$inject = [
    '$scope',
    'favoritesFac'
];

function favoritesController($scope,
                             favoritesFac) {

    $scope.data = [];

    activate();

    function activate() {
        findTempByIds()
    }


    function findTempByIds(){
        favoritesFac.getTempFromCityIds().then(
            function(success){
                $scope.data = favoritesFac.newModel(success);
            },
            function() {}
        );
    }

    $scope.delFavoriteClick = function(itemId, index){
        favoritesFac.delToLocalStorage(itemId);
        $scope.data.splice(index, 1);
    };

}