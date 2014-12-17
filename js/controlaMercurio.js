$(document).ready(function(){
    $("#entraTemperatura").blur(function(){
        TEMPPADRAO = 560;
        var mercurio = document.getElementById('mercurio');
        var novaTemp = $(this).val();

        //Se informar temeperatura além de 0 até 50 aparece um alert



            if(novaTemp < 0 || novaTemp > 50 || novaTemp == ''){
                alert('Temperatura fora do padrão, \n por favor informe entre 0 à 50')
            }else{

                novaTemp = novaTemp * 10;


                var novoTop = TEMPPADRAO - novaTemp;


                mercurio.style.top = novoTop+'px';
                mercurio.style.height =  novaTemp+'px';
            }

    });

});


