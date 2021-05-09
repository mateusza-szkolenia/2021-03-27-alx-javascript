# Protokół HTTP

## Zapytanie albo żądanie (request)

```
GET / HTTP/1.1
Host: wp.pl
User-Agent: Mozilla/5.0 (compatible; Firefox/88.2.2.2.2; Linux)
Cookie: sesja=127937912397812789387912789312879891723897318973
Accept: asdasdas

```
(pusta linijka oznacza koniec)

## Odpowiedź (response)
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Server: nginx
Date: 342432432
Set-Cookie: sesja=127937912397812789387912789312879891723897318973

<!doctype html>
<html>
<head>
<title>wirtualna polska...
...
<img src='obrazek.jpg'>
...
```

Pojawienie się obrazka `<img src='obrazke.jpg'>`, skryptu `<script src='skrypt.js'>`, arkuszy styli `<link rel=stylesheet href='plik.css'>` powoduje kolejne zapytania...

Te zapytanie mogą być wysyłane zarówno do serwera, z którego pierwotnie pobraliśmy stronę jak i do dowolnego innego.

Przykład:
```html
<h1>obrazek</h1>

<img src='https://i.imgur.com/4ibbeAG.jpg'>
```

Zapytanie do zewnętrznego serwera zawiera nagłówek `Referer:`


## Użycie `fetch()`

Co do zasady, `fetch()` może pobrać dane tylko z tej samej domeny, z której jest wywołany.
Nie może pobierać plików lokalnych wcale.

### Wyjątek: mechanizm `CORS` - Cross Origin Request Sharing
