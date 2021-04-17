function przelicz(){
    var rokur = parseInt(document.querySelector("#rokur").value);
    var rokbiez = 2021;

    var wiek = rokbiez - rokur;
    var kpos = wiek >= 21;
    var ksen = wiek >= 30;
    var kpre = wiek >= 35;

    var rokpeln = rokur + 18;
    var ilepeln = rokpeln - rokbiez;

    document.querySelector("#wiek").value = wiek;

    if (wiek >= 18){
        document.querySelector("#peln").value = "pełnoletni";
    }
    else {
        document.querySelector("#peln").value =
            "niepełnoletni, osiągnie pełnoletność w "
            + rokpeln + ", czyli za " + ilepeln + " lat";
    }

    document.querySelector("#kpos").value = kpos;
    document.querySelector("#ksen").value = ksen;
    document.querySelector("#kpre").value = kpre;

}
