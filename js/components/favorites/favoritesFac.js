myWeatherApp.factory('favoritesFac', favoritesFactory);

favoritesFactory.$inject = [
    '$http',
    '$q',
    'appWeather',
    'saveAndDelDataFac',
    'commonFac'];

function favoritesFactory(
    $http,
    $q,
    appWeather,
    saveAndDelDataFac,
    commonFac) {

    var service = {
        getTempFromCityIds  : getTempFromCityIds,
        delToLocalStorage   : delToLocalStorage,
        newModel            : newModel
    };

    return service;


    function getTempFromCityIds(){

        var deferred = $q.defer();
        var stringIds = commonFac.stringIds();
        $http.get(
            appWeather.url +
            appWeather.group + '?' +
            appWeather.byId + '=' +
            stringIds)
            .success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function newModel(srvResponse){
        return commonFac.newCityModel(srvResponse, true);
    }

    function delToLocalStorage(cityID){
        saveAndDelDataFac.delFromLS(cityID)
    }
}