angular.module('allDeviceCtrl',['allDeviceService'])

.controller('allDeviceController',function($http,$scope,Device){

            var vm  = this;
            Device.all()
                    .success(function(data){

                        vm.devices = data;
console.log(data);

                    });
$http.get('/api/getDevices')
        .success(function(data) {
            $scope.devices = data;
            console.log($scope.devices);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        })