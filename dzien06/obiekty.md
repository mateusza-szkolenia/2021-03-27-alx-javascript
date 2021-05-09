# Obiekty

## Sprawdzanie obecności własności (lub metody)

### operator `in`
```javascript
var uczen = {"imie": "Karol", "wiek": 15}

"imie" in uczen;        // true
"nazwisko" in uczen;    // false

var co = "wiek";
co in uczen;            // true
var co = "oceny";
co in uczen;            // false

// wykaże obecność własności (i metod) odziedziczonych z prototypu
"toString" in uczen;    // true
var co = "toString";
co in uczen;            // true
```

### porównanie z `undefined`
```javascript
var uczen = {"imie": "Karol", "wiek": 15}

uczen.imie == undefined;        // false
uczen['imie'] == undefined;     // false
uczen.xyz == undefined;         // true
uczen['xyz'] == undefined;      // true

var co = "wiek";
uczen[co] == undefined;         // true

// wykaże obecność własności (i metod) odziedziczonych z prototypu
uczen["toString"] == undefined; // false
uczen.toString == undefined;    // false 
```

### metoda `.hasOwnProperty()`
```javascript
var uczen = {"imie": "Karol", "wiek": 15}

uczen.hasOwnProperty('imie');       // true
uczen.hasOwnProperty('toString');   // false
uczen.hasOwnProperty('nazwisko');   // false
```

