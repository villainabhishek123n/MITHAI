var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  // Model
  $scope.title = "AngularJS MVC Example";
  $scope.items = ["Item 1", "Item 2", "Item 3"];
});
