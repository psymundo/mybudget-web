(function(){
  var gem = { amount: 3.30, type: 'inc' };
  var app = angular.module('myBudget', []);
  app.controller('pageController', function(){
  	this.trans = gem;
  });
  
  app.controller('transactionController', ['$scope', function($scope){
		$scope.transaction = {};
		$scope.addTrans = function(){
		trans.amount = $scope.myForm.amount;
		trans.type = $scope.myForm.type;
			
		
	});
})();