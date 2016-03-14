myWeatherApp.factory('commonFac', commonFactory);

commonFactory.$inject = [];

function commonFactory() {
    var service = {
        /*LocalStorage*/
        setLocalStorage     : setLocalStorage,
        getLocalStorage     : getLocalStorage,

        /*Common Services*/
        newCityModel        : newCityModel,
        stringIds           : stringIds,

        cadenaIds           : ''
    };

    return service;


    function setLocalStorage(key, ids){

        localStorage.setItem(key, ids);
    }

    function getLocalStorage(key){

        var idsSaved = localStorage.getItem(key);

        return idsSaved;
    }

    function newCityModel(srvResponse, option){
        service.data = [];

        angular.forEach(srvResponse.list, function(value, key){
            if(value){
                var temp = value.main.temp - 272.15;
                var tmpCity = {
                    id      : value.id,
                    name    : value.name,
                    country : value.sys.country,
                    temp    : temp.toFixed(),
                    favorite: option
                };
                service.data.push(tmpCity);
            }
        });
        return service.data;
    }

    function stringIds(){
        var locaIds = angular.fromJson(service.getLocalStorage("cityList"));

        if(locaIds!= null){
            angular.forEach(locaIds, function(value, key){
                if (typeof value != 'undefined'){
                    if(key == 0){
                        service.cadenaIds = value.id;
                    }else{
                        service.cadenaIds = service.cadenaIds + ',' + value.id;
                    }
                }else{
                    service.cadenaIds = '';
                }
            });
        }
        return service.cadenaIds;
    }
}