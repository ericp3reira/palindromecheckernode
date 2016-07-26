angular.module('palindromeChecker', [])
.controller('MainCtrl', function($scope, $http){  
  $scope.words = [  ];
  $scope.addWord = function(){
    let sendWord = $http({
      method: 'POST',
      url: '/post',
      data: $scope.data,
    }).then(function successCallback(response) {
      $scope.words.push({title: $scope.data.title, result: 'is a palindrome'});
      $scope.data.title = "";
    }, function errorCallback(response) {
      $scope.words.push({title: $scope.data.title, result: 'is not a palindrome'});
      $scope.data.title = "";
    });
  };
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  }
});