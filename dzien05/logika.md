# operatory logiczne

- `p && q` - koniunkcja (logiczne `ORAZ` ang: `AND`)
- `p || q` - alternatywa (logiczne `LUB` ang: `OR`)
- `! p` - negacja (logiczne `NIE` ang: `NOT`)

## przykład

```javascript
var x = 8;

if (x >= 3 && x <= 30){
    console.log("x jest w przedziale <3, 30>")
}

if (x < 0 || x > 100){
    console.log("x jest spoza zakresu 0..100")
}

if (! x > 100){ // nieprawda, że x większe od 100 => x mniejsze równe 100

}

if (!isNaN(x)){ // nieprawda, że x jest NaN (not a number)

}
```

## tablica prawdy

### koniunkcja `p && q`

| p \ q  | false |  true |
|--------|-------|-------|
| false  | false | false |
| true   | false | true  |

### alternatywa `p || q`

| p \ q  | false |  true |
|--------|-------|-------|
| false  | false | true  |
| true   | true  | true  |
