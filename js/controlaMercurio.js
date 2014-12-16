$(document).ready(function(){
    $("#entraTemperatura").blur(function(){
        tempPadrao = 560;
        var mercurio = document.getElementById('mercurio');
        var novaTemp = $(this).val();

        novaTemp = novaTemp * 10;


        var novoTop = tempPadrao - novaTemp;


        mercurio.style.top = novoTop+'px';
        mercurio.style.height =  novaTemp+'px';
    });

});


