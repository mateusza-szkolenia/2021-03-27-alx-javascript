function przelicz_btn(){

    var liczby = document.querySelector('#tempC').value.split("\n")
    var tabelka = document.querySelector('#tabelka-wynikowa tbody')

    for (var i=0; i<liczby.length; i++){
        var wiersz = document.createElement("tr")
        var komC = document.createElement("td")
        var komF = document.createElement("td")
        var komOpis = document.createElement("td")
        komC.innerText = liczby[i]

        wiersz.append(komC)
        wiersz.append(komF)
        wiersz.append(komOpis)

        tabelka.append(wiersz)
    }

    console.log(liczby)

}