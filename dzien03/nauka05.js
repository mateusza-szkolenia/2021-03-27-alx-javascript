temperatura = 20.0;

function zwieksz_temp(){
    temperatura = temperatura + 0.25;
    pokaz_temp();
}

function zmniejsz_temp(){
    temperatura = temperatura - 0.25;
    pokaz_temp();
}

function pokaz_temp(){
    document.querySelector("#temp_current").value = temperatura.toFixed(2);
}
