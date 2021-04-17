# Typy danych w JS

## Podstawowe

### liczbowy
* `100`
* `36.6`
* `-100`
* `-42.1`
  
W innych językach programowania istnieje podział na dwa rodzaje typów liczbowych:
- **integer** - całkowity (np. `-5`, `0`, `100`)
- **floating point**, **float** - zmiennoprzecinkowy (np. `1.5`)

#### konwersja
Z liczby na string: `a.toString()` lub `a.toFixed(2)`

Ze stringa na liczbę: `parseInt(a)` lub `parseFloat(a)`

### string (łańcuch tekstowy)
Potocznie: tekst, napis

np.
* `"alamakota"`
* `"123"`
* `"12.56"`
* `"100.00 PLN"`
* `"Szkolenie Javascript"`
* `'Szkolenie Javascript'`

#### własności
- długość: `imie.length`

#### metody
- zmień jakiś fragment na inny: `zdanie.replace('Ala', 'Ola')`


### boolean
inaczej: wartości logiczne, boolowskie

* `true`
* `false`

## Złożone

### array (tablica)

Służy do przechowywania pewnej liczby wartości. Może przechowywać wartości dowolnych typów.

np.
* `[5, 6, 4, 3, 2, 5, 6, 6, 6]`  - tablica z liczbami
* `["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"]` - tablica z napisami
* `[5, "alamakota", false, 78]` - tablica z wartościami różnych typów
* `[100, [3,4,5,6], ["styczeń", "luty", "marzec"]]` - tablica z zagnieżdżonymi tablicami

#### własności
- długość: `oceny.length`

#### metody
- dopisz element na końcu: `oceny.push(1)`
- znajdź pozycję: `miesiace.indexOf('lip')` - zwraca pozycję lub `-1` jeśli nie znaleziono