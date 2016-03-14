myWeatherApp.factory('finderFac', finderFactory);

finderFactory.$inject = [
    '$http',
    '$q',
    'appWeather',
    'saveAndDelDataFac',
    'commonFac'
];

function finderFactory(
    $http,
    $q,
    appWeather,
    saveAndDelDataFac,
    commonFac) {

    var service = {
        getTempFromCity     : getTempFromCity,
        getTempFromIds      : getTempFromIds,

        newModel            : newModel,

        addToLocalStorage   : addToLocalStorage,
        delToLocalStorage   : delToLocalStorage,

        data            : []
    };

    return service;


    function getTempFromCity(city){
        var deferred = $q.defer();

        $http.jsonp(
            appWeather.url +
            appWeather.find + '?' +
            appWeather.city +
            city + '&' +
            appWeather.callBack)
            .success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getTempFromIds(){
        var deferred = $q.defer();

        return deferred.promise;
    }


    function newModel(srvResponse){
        return commonFac.newCityModel(srvResponse, false);
    }

    function addToLocalStorage(cityObj){
        saveAndDelDataFac.saveOnLS(cityObj);
    }

    function delToLocalStorage(cityID){
        saveAndDelDataFac.delFromLS(cityID)
    }
}