testApp.controller('formController', function formController($scope, formService, dataPassing){
	$scope.list = [];
	$scope.total = 0;
	$scope.options = [{name: 'Entertainment', value: 'Entertainment'} , {name: 'Utility', value: 'Utility'}, {name: 'Rent', value: 'Rent'},{name: 'Food', value: 'Food'},{ name: 'Other', value: 'Other'}];
	$scope.sTransaction = {option : $scope.options[0].value};
		
	$scope.editCopy = angular.copy($scope.sTransaction);

	$scope.submitForm = function(){
		$scope.list.push($scope.sTransaction);
		dataPassing.data($scope.list);
		//formService.addTransaction($scope.sTransaction);
		$scope.total = $scope.getTotal();
		$scope.sTransaction = null;
		$scope.sTransaction = {option : $scope.options[0].value};
	}

	$scope.getDate = function(){
		$scope.date = new Date();
	}

	$scope.getList = function()
	{
		return list;
	}

	$scope.getTotal = function()
	{	
		var total = 0;
		for(var i = 0; i < $scope.list.length; i++)
		{
			if($scope.list[i].type == "Income")
			{
				total = parseFloat($scope.list[i].amount) + total;
			}
			else if($scope.list[i].type == "Expenditure")
			{
				total = total - parseFloat($scope.list[i].amount);
			}
		}

		return total;
	}
});