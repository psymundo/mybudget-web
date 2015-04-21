app.factory('dataPassing', function($http){
	return{
		passing:function(data){
			var $promise = $http.post('testDataPassing.php, data);
			$promise.then(function(){
				alert("Done");
				});
		}
	}
});