testApp.factory('formService', function(){
	
	var insertTransaction = function(sTransaction){
		return true;
	}

	return {
		sTransaction: {
			description: "Default",
			amount: 0,
			type: "Default",
			option: "s",
			date: "020415"
		}
	}
});