$(document).ready(function(){
    $("#entraTemperatura").blur(function(){
        TEMPPADRAO = 475;
        var mercurio = document.getElementById('mercurio');
        var novaTemp = $(this).val();

        //Se informar temeperatura além de 0 até 50 aparece um alert



            if(novaTemp < 0 || novaTemp > 40 || novaTemp == ''){
                alert('Temperatura fora do padrão, \n por favor informe entre 0 à 40')
            }else{

                novaTemp = novaTemp * 10;


                var novoTop = TEMPPADRAO - novaTemp;


                mercurio.style.top = novoTop+'px';
                mercurio.style.transition.height =  novaTemp+'px 0.8s ';
            }

    });

});


