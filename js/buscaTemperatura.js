$(function(){

	var $dados = $('#dados');
	$.ajax({
		type:'GET',
		url: 'http://api.openweathermap.org/data/2.5/find?q=bom%20sucesso%20de%20itarare',
		success: function(json){
			var temp = json.list[0].main.temp;

			temp = converteCelsus(temp);

			$('#entraTemperatura').val(temp);

			$dados.append('<li> Temperatura: '+ temp +' </li>');
		}
	});
});


function converteCelsus(temp){
	var newTemp = Math.ceil(temp - 273.15);

	return newTemp;
}