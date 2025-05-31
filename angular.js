// Declare the module and define a controller
var app = angular.module('myApp', []); // The 'myApp' module, with no dependencies

// Define a controller for this module
app.controller('myCtrl', ['$scope', function($scope) {
    // Add a property to the $scope object
    $scope.name = 'John Doe';
}]);
