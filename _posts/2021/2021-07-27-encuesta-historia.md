---
layout: post
title:  "Encuesta - Historia Principal"
author: sharn
categories: [ encuestas ]
tags: [encuestas, historia principal]
image: assets/images/articles/encuestas/msq/portada.jpg
description: "Encuesta sobre la mejor historia principal por expansiones."
featured: false
hidden: false
---

En nuestra cuenta de [Twitter](https://twitter.com/GacetaEorzea){:target="_blank"} hicimos una [encuesta](https://twitter.com/GacetaEorzea/status/1417530378991046659){:target="_blank"} preguntando cual **Historia Principal** de las expansiones os gustó más. En este artículo os mostramos el resultado y nuestra propia interpretación.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

#### Mejor Historia Principal

<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <canvas id="msq"></canvas>
                </div>
            </div>
        </div>
     </div>     
</div>

<script>
var msq = document.getElementById("msq");
if (msq) {
  new Chart(msq, {
  type: 'bar',
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
    },
  },  
  data: {
      labels: [
        'Shadowbringers',
        'Heavensward',
        'Stormblood',
        'A Realm Reborn',        
      ],
      datasets: [{
        label: '',
        data: [
          64.2,
          24.4,
          6.5,
          4.9],
        backgroundColor: [          
          '#4C3FA1',
          '#406FEA',
          '#E22102',
          '#298BB0'
        ],
        axis: 'y',
      }]
    },
  });
}
</script>


Con estos resultados podemos sacar **algunas conclusiones**:

Está clarísimo que la historia que más ha gustado es **Shadowbringers**, por ello sun gran numero de votos. 

Posiblemente el comienzo más lento del juego haya lastrado a **A Realm Reborn**, pero creo que nadie podrá negar que el final de su trama es impactante y nadie la puede olvidar.

También hay que destacar los muchos mensajes que nos han llegado sobre **Heavensward**, es una historia que no pasa desapercibida y por ello es la segunda mas votada. 

Sobre **Stormblood** hay que decir que su baja numero de votos no quiere decir que no guste, sino que sencillamente, no es la preferida y solo se podía votar a una.

Nosotros aconsejamos a todos los jugadores es que lean las todas las historias, que se empapen en la trama, que conozcan a los personajes y que recorran el camino junto al **Guerrero de la Luz**.