angular.module('DevService',[])

.factory('DevSrvc', function($http,$q){

var devFactory={};
  devFactory.create= function(devData){

        return $http.post('/api/createDevice',devData);
}
            return devFactory
});
