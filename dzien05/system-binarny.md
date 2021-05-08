# System dziesiętny

```
mamy cyfry: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9    (jest ich dziesięć)

    mamy liczbę w dziesiętnym systemie pozycyjnym:
    2729

    2   7   2   9
    2000 +
        700 +
            20 +
                9

    2 * 1000    10³     podstawą jest 10
    7 *  100    10²
    2 *   10    10¹
    9 *    1    10⁰
```

# System binarny (dwójkowy)
```
mamy tylko dwie cyfry: 0 i 1

    mamy liczbę w systemie binarnym:
    1011001

    1 * 64      2⁶      ->  64
    0 * 32      2⁵      ->   0
    1 * 16      2⁴      ->  16
    1 *  8      2³      ->   8
    0 *  4      2²      ->   0
    0 *  2      2¹      ->   0
    1 *  1      2⁰      ->   1
    ----------------------------
                            89
                                  
```

# Konwersja i wyświetlanie
```javascript

var n = 89

console.log(n.toString(2))  // konwersja na string w systemie binarnym: "1011001"

var xyz = "1010101"

console.log(parseInt(xyz, 2)) // konwersja na liczbę (85)
```

## Operacje na liczbach binarnych

### or bitowe
```
a = 89      1011001
b = 85      1010101
a | b       1011101     => 93
```

### and bitowe
```
a = 89      1011001
b = 85      1010101
a & b       1010001     => 81
```

### xor bitowe
```
a = 89      1011001
b = 85      1010101
a ^ b       0001100     => 12       (to nie jest potęgowanie!)
```

## Zastosowanie

Chcemy na jednej liczbie przechowywać wiele informacji typu tak/nie.
Np. typ samochodu:
- benzynowy tak/nie
- diesel tak/nie
- elektryczny tak/nie
- gazowy tak/nie
- nowy tak/nie
- bezwypadkowy tak/nie
- sprawny tak/nie

```
benzynowy       00000001     1
diesel          00000010     2
elektryczny     00000100     4
gazowy          00001000     8
nowy            00010000    16
bezwypadkowy    00100000    32
sprawny         01000000    64
```

### Przykład
```
kod = 21        00010101
                       1 benz
                     1   elektryczny
                   1     nowy
```

```
Samochód sprawny, diesel:
2 | 64  => 66
```




