## Rzeczowniki - liczba mnoga

### Analiza języka
```
1           pies
2           psy
3           psy
4           psy
5           psów
10          psów
11          psów
12          psów !!!
13          psów !!!
14          psów !!!
21          psów
22          psy
23          psy
24          psy
25          psów
30          psów
31          psów
32          psy
33          psy
34          psy

1412        psów
1413        psów
1422        psy
1452        psy

1732 % 10   --> 2
1732 % 100  --> 32
```

```javascript
function odmien(ile, slowa){
    if (ile==1){
        return slowa[0];
    }
    if (ile%100 == 12){
        return slowa[2];
    }
    if (ile%100 == 13){
        return slowa[2];
    }
    if (ile%100 == 14){
        return slowa[2];
    }
    if (ile%10==2){
        return slowa[1];
    }
    /* itd */

}
```

