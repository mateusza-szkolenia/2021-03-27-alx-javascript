function przelicz(){
    rokur = parseInt(document.querySelector("#rokur").value);
    rokbiez = 2021;

    wiek = rokbiez - rokur;
    kpos = wiek >= 21;
    ksen = wiek >= 30;
    kpre = wiek >= 35;

    rokpeln = rokur + 18;
    ilepeln = rokpeln - rokbiez;

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
