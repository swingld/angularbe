'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('rest/user/login', {ph: $scope.user.ph, passwd: $scope.user.password})
          .success(function(response){
              $state.go('app.dashboard-v1');
          }
      /*.then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{

          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      }*/).error(function(response){
          $scope.authError = response;
      });
    };
  }])
;