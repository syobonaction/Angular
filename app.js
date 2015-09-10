(function(){
var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function(){
  this.people = people;

  this.sortList = function(){
    people = people.reverse();
    console.log(people);
  }

});

var people = [];
var person = {
  "name" : "Charles",
  "age" : 28,
  "editing" : false
}
var person2 = {
  "name" : "Ilker",
  "age" : 35,
  "editing" : false
}
var person3 = {
  "name" : "William",
  "age" : 17,
  "editing" : false
}
var person4 = {
  "name" : "Diane",
  "age" : 63,
  "editing" : false
}
people.push(person);
people.push(person2);
people.push(person3);
people.push(person4);
})();
