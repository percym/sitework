angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider){

            $routeProvider

                .when('/',{
                    templateUrl: '/app/views/home.html'

                })
                .when('/alldevices',{
                                    templateUrl: '/app/views/allDevices.html'




                                })
                    .when('/javaworks',{
                                                        templateUrl: '/app/views/java.html'




                                                    })
                     .when('/android',{
                                                         templateUrl: '/app/views/android.html'

                                                     })

  $locationProvider.html5Mode(true);



})
