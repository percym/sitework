angular.module('dvcCtrl',['DevService'])

.controller('DeviceCtrl', function( $scope, $http , DevSrvc){


                    var vm =this;


              $http.jsonp('http://ipinfo.io/?callback=JSON_CALLBACK')
                .success(function(response) {
                             $scope.ip = response.ip;
                             $scope.hostname = response.hostname;
                             $scope.loc = response.loc; //lat-longtitude
                             $scope.org = response.org; //organization
                             $scope.city = response.city;
                             $scope.region = response.region; //state
                             $scope.country = response.country;
                             $scope.postal =response.postal; //city area code
                             console.log($scope.ip);




             $http({
                              method: 'POST',
                              url:'api/createDevice',
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                                 transformRequest: function(obj) {
                             var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                            },
                            data:{'ip':$scope.ip, 'loc':$scope.loc,'region':$scope.region,'org':$scope.org,'country':$scope.country}
                            })

//var phonekani = {'ip':$scope.ip, 'loc':$scope.loc,'region':$scope.region,'org':$scope.org,'country':$scope.country};
//$http({
//    method: 'POST',
//    url: 'api/createDevice',
//    data: phonekani,
//    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//}).success(function(){
//       console.log($scope.ip);
//console.log(phonekani)
//})

 })

  })
