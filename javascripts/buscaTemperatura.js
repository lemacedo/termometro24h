$(function(){
	$.ajax({
		type:'GET',
		url: 'http://api.openweathermap.org/data/2.5/find?q=bom%20sucesso%20de%20itarare',
		success: function(data){
			console.log('Sucess', data);
		}
	});
});