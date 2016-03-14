myWeatherApp.factory('saveAndDelDataFac', saveDataFactory);

saveDataFactory.$inject = [
    'commonFac'
];

function saveDataFactory(commonFac) {

    var service = {
        saveOnLS    : saveOnLS,
        delFromLS   : delFromLS,

        elemToDel   : ''
    };

    return service;

    function saveOnLS(obj){
        var locaIds = angular.fromJson(commonFac.getLocalStorage("cityList"));

        if(locaIds==null){
            locaIds = [];
        }
        locaIds.push(obj);
        commonFac.setLocalStorage('cityList', angular.toJson(locaIds));
    }

    function delFromLS(id){
        var locaIds = angular.fromJson(commonFac.getLocalStorage("cityList"));

        angular.forEach(locaIds, function(value, key){
            if(value.id == id){
                service.elemToDel = key;
            }
        });

        locaIds.splice(service.elemToDel, 1);

        commonFac.setLocalStorage('cityList', angular.toJson(locaIds));
    }
}