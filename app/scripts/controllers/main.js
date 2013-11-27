'use strict';

angular.module('spikeAngularE2eTestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.form = {
    	result : ''
    };

    $scope.submitForm = function(form){
    	$scope.form.result = 'username: ' + form.username + ', password is: ' + form.password;
    };

  });
