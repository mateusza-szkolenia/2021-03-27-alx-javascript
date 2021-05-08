function przelicz_btn(){

    var liczby = document.querySelector('#tempC').value.split("\n")
    var tabelka = document.querySelector('#tabelka-wynikowa tbody')
    tabelka.innerHTML=""

    for (var i=0; i<liczby.length; i++){
        var wiersz = document.createElement("tr")
        var komC = document.createElement("td")
        var komF = document.createElement("td")
        var komOpis = document.createElement("td")
        komC.innerText = liczby[i]
        komF.innerText = C_to_F(parseFloat(liczby[i])).toFixed(1)

        wiersz.append(komC)
        wiersz.append(komF)
        wiersz.append(komOpis)

        tabelka.append(wiersz)
    }

    console.log(liczby)

}

function C_to_F(tC){
    return 1.8 * tC + 32;
}