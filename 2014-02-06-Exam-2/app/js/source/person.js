/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    var cals = food.caloriesPerServing * servings;
    this.weight = this.weight + Math.round(cals/3500);
  };

  Person.prototype.exercise = function(typeOfExercise, minutes){
    var cals;
    if (this.gender === 'Female'){
      if (typeOfExercise === 'Swim'){
        cals = (minutes/60) * (700/3500);
        this.weight = this.weight - Math.round(cals);
      }else{
        cals = (minutes/60) * (500/3500);
        this.weight = this.weight - Math.round(cals);
      }
    }else{
      if (typeOfExercise === 'Swim'){
        cals = (minutes/60) * (900/3500);
        this.weight = this.weight - Math.round(cals);
      }else{
        cals = (minutes/60) * (700/3500);
        this.weight = this.weight - Math.round(cals);
      }
    }
  };

  Object.defineProperty(Person.prototype, 'crazyString', {
    get: function (){

      var foods = _.unique(this.foods).reverse();
      var words = _.map(foods, function(food){
        return food.name.length % 2 === 0 ? food.name.toLowerCase() : food.name.toUpperCase();
      });

      return words.join('--');
    }
  });

  return Person;
})();
