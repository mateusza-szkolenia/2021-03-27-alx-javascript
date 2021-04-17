# Operacje arytmetyczne

## Podstawowe operacje:
- `2 + 2` - dodawanie
- `2 - 2` - odejmowanie
- `2 * 2` - mnożenie
- `2 / 2` - dzielenie
- `2 % 2` - dzielenie modulo (reszta z dzielenia)

## Porównywanie

| zapis    | znaczenie                  |
|----------|----------------------------|
| `a < 7`  | `a` mniejsze niż `7`       |
| `a <= 7` | `a` mniejsze lub równe `7` |
| `a > 7`  | `a` większe niż `7`        |
| `a >= 7` | `a` większe lub równe `7`  |
| `a == 7` | `a` równe `7`              |
| `a === 7`| `a` identyczne jak `7` (zgodność typu i wartości) |
| `a != 7` | `a` różne od `7`           |

## Zmiana wartości

| zapis    | znaczenie                  |
|----------|----------------------------|
| `x = 8`  | `x` staje się `8`          |
| `x += 8` | `x` zwiększa się o `8`     |
| `x -= 8` | `x` zmniejsza się o `8`    |
| `x++`    | `x` zwiększa się o `1`     |
| `x--`    | `x` zmniejsza się o `1`    |
| `++x`    | `x` zwiększa się o `1`     |
| `--x`    | `x` zmniejsza się o `1`    |

## Post i pre-inkrementacja

### Postinkrementacja
```javascript
x = 8;
y = x++;
```
Teraz `x` wynosi `9` a `y` wynosi `8`

### Preinkrementacja
```javascript
x = 8;
y = ++x;
```
Teraz `x` wynosi `9` i `y` wynosi `9`
