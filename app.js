var myApp = angular.module('myApp',[]);



myApp.controller('mainController', function($scope){
  $scope.people = [];
  $scope.person = {
    "name" : "Charles",
    "age" : 28,
    "editing" : false
  }
  $scope.person2 = {
    "name" : "Ilker",
    "age" : 100,
    "editing" : false
  }
  $scope.person3 = {
    "name" : "William",
    "age" : 17,
    "editing" : false
  }

  $scope.people.push($scope.person);
  $scope.people.push($scope.person2);
  $scope.people.push($scope.person3);

  $scope.editMode = function(){
    if($scope.editing == true) {
      $scope.editing = false;
    } else {
      $scope.editing = true;
    }

  }

});
