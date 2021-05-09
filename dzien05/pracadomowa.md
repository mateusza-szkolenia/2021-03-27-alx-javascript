# Praca domowa

## System binarny

Zrobić aplikację przeliczającą liczby z systemu dziesiętnego na binarny i odwrotnie.

## Zegar binarny

Zrobić [zegar binarny](https://en.wikipedia.org/wiki/Binary_clock).

### Uczniowie

Rozbudować istniejący skrypt wyświetlający uczniów o następujące funkcje:

- Zaznaczenie ucznia z najwyższą i najniższą średnią
- Zaznaczenie uczniów kwalifikujących się na czerwony pasek (średnia >= 4.75)
- Policzenie średniej całej klasy
- Policzenie mediany średnich
- Policzenie ile razy występuje jakie imię
    - Maciej: 3, Barbara: 2 *itd* (w postaci listy lub tabelki wg uznania)

Wygenerować osobne listy:
- listę uczniów z czerownym paskiem
- listę uczniów ze średnią niższą niż 3.00
- listę uczniów mających co najmniej jedną 6
- listę uczniów mających co najmniej dwie jedynki
- listę 3 uczniów z najwyższą średnią
- *itd*

### Osoby

W oparciu o dane wygenerowane pod adresem: https://mateusza2.github.io/Programowanie/Generatory/osoby.html#generated-JSON stworzyć listę osób. Dla każdej osoby policzyć:
- [BMI](https://pl.wikipedia.org/wiki/Wska%C5%BAnik_masy_cia%C5%82a)
- napisać klasyfikację masy ciała na podstawie BMI

Dodatkowo:
- znaleźć najstarszą osobę i najmłodszą
- najwyższą i najniższą
- najcięższą i najlżejszą
- o największym i najmniejszym BMI
- znaleźć średnią i medianę tych wartości

### Tankowania

W oparciu o dane wygenerowanie pod adresem: https://mateusza2.github.io/Programowanie/Generatory/tankowania.html#generated-JSON stworzyć wykaz tankowań samochodu. Policzyć:
- zużycie paliwa na każdym tankowaniu
  - przeliczyć zużycie paliwa na jednostki amerykańskie (zasięg w milach na galonie paliwa)
- średnie zużycie paliwa w całyn zarejestrowanym okresie
- średni koszt kilometra na każdym tankowaniu oraz w całym okresie
- średni koszt dzienny (j.w.)
- średni koszt miesięczny (j.w.)

### Wykresy

Do powyższych zadań zrobić wykresy.

### Miasta Polski

Używając zbiór danych z adresu: `https://mateusza2.github.io/Programowanie/Zbiory_danych/polskie-miasta.json` stworzyć aplikację pozwalającą na:
1. Wyszukanie miasta o podanej nazwie
2. Wyszukanie 2 miast i obliczenie (przybliżonej) odległości między nimi.
3. Wyszukanie miasta o podanaje nazwie i wszystkich miast we wskazanym promieniu.

Do liczenie odległości na podstawie współrzędnych użyć [wzoru haversine](https://en.wikipedia.org/wiki/Haversine_formula)
lub prostej aproksymacji zakładającej, że Ziemia jest lokalnie płaska.
