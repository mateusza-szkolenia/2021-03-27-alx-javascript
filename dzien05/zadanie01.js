function przelicz_btn(){

    var liczby = document.querySelector('#tempC').value.split("\n")
    var tabelka = document.querySelector('#tabelka-wynikowa tbody')
    tabelka.innerHTML=""

    for (var i=0; i<liczby.length; i++){
        var wiersz = document.createElement("tr")
        var komC = document.createElement("td")
        var komF = document.createElement("td")
        var komOpis = document.createElement("td")
    
        var temperatura = liczby[i]

        komC.innerText = temperatura
        komF.innerText = C_to_F(parseFloat(temperatura)).toFixed(1)
        komOpis.innerText = odczucie_temperatury(parseFloat(temperatura))

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

function odczucie_temperatury(tC){
    if (tC < 0){
        return "mróz"
    }
    if (tC < 8){
        return "zimno" 
    }
    if (tC < 16){
        return "chłodno"
    }
    if (tC < 25){
        return "ciepło"
    }
    return "gorąco"
}