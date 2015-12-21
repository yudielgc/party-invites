(function (angular){
    'use strict';

    var app = angular.module('app', []);

    app.controller('MainController', MainController);
    function MainController($scope) {
        $scope.title = 'Party Invites!';

        $scope.content = 'Lolita la loca...';
    }
})(angular);