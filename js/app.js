  // By Tej Sohal

var app = angular.module("app", ['ngAnimate', 'angularLazyImg']);

app.controller("mainCtrl", function($scope, $http) {

$http.get("../data/hotels.json")
   .then(function(response) {
       $scope.hotels = response.data.Establishments;

       $scope.sortBy = function(propertyName) {
          $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
          $scope.propertyName = propertyName;
        };

        $scope.getStars = function(rating) {
            // Get the value
                var val = parseFloat(rating);
                // Turn value into number/100
                var size = val/5*100;
                return size + '%';
              }

              $scope.getUserRatings = function(rating) {
                  // Get the value
                      var val = parseFloat(rating);
                      // Turn value into number/100
                      var size = val/10*100;
                      return size + '%';
                    }
        });

        $scope.limit = 12;
        $scope.addMore = function(){
            $scope.limit += 100;
          }


});


/* Jquery Stuff */

$(function(){

  if(typeof Project === "undefined")
      var Project = {};


  Project.Main = {
      init : function() {
          Project.Main.scroll();
      },

      scroll: function () {
          $('a[href^="#"]').on('click', function(event) {
              var target = $(this.getAttribute('href'));
              if( target.length ) {
                  event.preventDefault();
                  $('html, body').stop().animate({
                      scrollTop: target.offset().top -10
                  }, 1000);
              }
          });

      },

  };

  Project.Main.init();

});
