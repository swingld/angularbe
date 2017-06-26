'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {

    $scope.authError = null;
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('rest/user/register', {ph: $scope.user.ph, passwd: $scope.user.passwd})
      .success(function(response) {
        if ( !response ) {
          $scope.authError = response;
        }else{
          $state.go('app.dashboard-v1');
        }
      }).error(function(response) {
          
              $scope.authError = response;
      });
    };
  }])
 ;