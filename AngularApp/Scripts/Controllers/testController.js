"use strict";

sduttaApp.controller('testController', ['$scope', function ($scope) {
    angular.element(document).ready(function () {
        $("#size").html(window.innerWidth + "x" + window.innerHeight);
    });
}]);