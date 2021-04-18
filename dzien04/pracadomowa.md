# Praca domowa

## Rzeczowniki - liczba mnoga

Napisać funkcję odmieniającą wskazany rzeczownik przez podaną liczbę.

Przykład zastosowania:
```javascript
odmien(1, ['kot', 'koty', 'kotów']);    // zwraca 'kot'
odmien(2, ['kot', 'koty', 'kotów']);    // zwraca 'koty'
odmien(3, ['kot', 'koty', 'kotów']);    // zwraca 'koty'
odmien(5, ['kot', 'koty', 'kotów']);    // zwraca 'kotów'
odmien(10, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(20, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(21, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(22, ['kot', 'koty', 'kotów']);   // zwraca 'koty'
/* i.t.d */
```

## Nazwy liczebników

Napisać funkcję zamieniającą liczby (`int`) na zapis słowny (`string`).

Przykład:
```javascript
slownie(1);         // zwraca 'jeden'
slownie(2);         // zwraca 'dwa'
slownie(5);         // zwraca 'pięć'
slownie(20);        // zwraca 'dwadzieścia'
slownie(123);       // zwraca 'sto dwadzieścia trzy'
slownie(-5);        // zwraca 'minus pięć'
slownie(456123);    // zwraca 'czterysta pięćdziesiąt sześć tysięcy sto dwadzieścia trzy'
```

## Pola i obwody figur

Napisać prostą aplikację pozwalającą wyliczać pola i obwody różnych figur na podstawie różnych wartości:

- kwadratu:
  - na podstawie boku
- prostokąta:
  - na podstawie dwóch boków
- trójkąta prostokątnego:
  - na podstawie dwóch boków
- trójkąta równoramiennego:
  - na podstawie podstawy i wysokości
- trójkąta równobocznego
  - na podstawie boku
- trapezu
- równoległoboku
- rombu
- koła/okręgu
- *itp*

## Statystyki liter

Napisać funkcję, która przeanalizuje wprowadzony tekst i poda częstotliwość występowania poszczególnych znaków.

Np. dla tekstu: `Ala ma kota a kot ma pchły`

Wyświetli tabelę typu:

|litera|liczba wystąpień|procent wystąpień|
|---|----|-------|
| A |  1 | 3.8%  |
| a |  5 | 19.2% |
| l |  1 | ...   |
| m |  2 | ...   |
| k |  2 | ...   |
*itd*

