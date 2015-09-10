var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function(){
  this.people = people;
});

var people = [];
var person = {
  "name" : "Charles",
  "age" : 28,
  "editing" : false
}
var person2 = {
  "name" : "Ilker",
  "age" : 100,
  "editing" : false
}
var person3 = {
  "name" : "William",
  "age" : 17,
  "editing" : false
}
people.push(person);
people.push(person2);
people.push(person3);
