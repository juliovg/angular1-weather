myWeatherApp.controller('finderCtrl', finderController);

finderController.$inject = [
    '$scope',
    'finderFac'
];

function finderController($scope,
                          finderFac) {

    $scope.place = {};
    $scope.checked = false;
    $scope.dataSelected = {};
    $scope.data = [];


    activate();

    function activate() {

    }

    $scope.favoriteClick = function(item){
        if(!item.favorite){
            item.favorite = true;

            var objTemp = {
                id : item.id
            };
            finderFac.addToLocalStorage(objTemp);
        }else{
            item.favorite = false;
            finderFac.delToLocalStorage(item.id);
        }
    };

    $scope.OnItemClick = function() {
        findTempByCity();
    };

    function findTempByCity(){
        finderFac.getTempFromCity($scope.place.name).then(
            function(success){
                $scope.data = finderFac.newModel(success);
            },
            function() {}
        );
    }

}