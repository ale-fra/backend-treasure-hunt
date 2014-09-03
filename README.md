backend-treasure-hunt
=====================


Ciao ragazzi! questa è la bozza della caccia al tesoro di cui vi avevo parlato!
è correlata di test nella cartella spec

legge il contenuto della cartella src/img e ritorna un JSON di questo tipo
```javascript
  {
    -fileList: [
      -{
        name: "ImageName.ext"
        url: "http://localhost:3000/img/" +  ImageName.ext
      },
      -{..},
      -{..}
      ]
  }
```
  
logicamente il server rende anche pubblica la cartella delle immagini cosi da poterle accedere dal url costruito :D

andranno aggiunti poi le domande per i quix (presto lo farò )

Ps: per provare clonate il repo, da shell entrare nella cartella scaricata e lanciare "node ." sul browser andate su http://localhost:3000/getJSON ;)

fatemi sapere.
