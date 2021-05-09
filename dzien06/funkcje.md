# Funkcje

```javascript
function dodaj7(x){
    return x + 7;
}

// użycie:
var a = dodaj7(100);
// a wynosi 107
```

## Funkcje anonimowe

```javascript
var jakas_funkcja = function(x){
    return x * 9;
}

// użycie:
var a = jakas_funkcja(100);
// a wynosi 900
```

Funkcje anonimowe możemy traktować tak jak każdą inną wartość, czyli np.
- umieszczać w zmiennej
- umieszczać w tablicy
- umieszczać w słowniku (obiekcie)
- przekazywać jako parametr

### umieszczanie funkcji w tablicy
```javascript
var podatki = [
    function(x){ return 50; },
    function(x){ return 0.13 * x + 100; },
    function(x){ return 0.21 * x + 1000; }
]

// użycie:
var przychod = 20000;
var numer_podatku = 1;
var podatek = podatki[numer_podatku](przychod);
// podatek wynosi:
// 0.13 * 20000 + 100 = 2700
```

### przekazywanie funkcji jako parametr do innej funkcji (`.map`)
```javascript
var ceny_netto = [89.00, 76.00, 35.00];
var ceny_brutto = ceny_netto.map(function(c){return c*1.23;})

```
