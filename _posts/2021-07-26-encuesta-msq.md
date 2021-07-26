---
layout: post
title:  "Encuesta - Mejor Historia Principal"
author: sharn
categories: [  ]
tags: [encuestas, clases]
image: assets/images/articles/encuestas/msq/portada.jpg
description: "Encuesta sobre la mejor historia principal por expansiones."
featured: false
hidden: true
---

En nuestra cuenta de [Twitter](https://twitter.com/GacetaEorzea){:target="_blank"} hicimos una [encuesta](https://twitter.com/GacetaEorzea/status/1417530378991046659){:target="_blank"} preguntando cual **Historia Principal** de las expansiones os gustó más. En este artículo os mostramos el resultado y nuestra propia interpretación.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

### Mejor Historia Principal

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


Con estos resultados podemos sacar algunas conclusiones. Está clarísimo que la expansión que más os ha gustado es **Shadowbringers**. Posiblemente el comienzo más lento del juego haya lastrado **A Realm Reborn** pero creo que nadie podrá negar que el final de su trama es impactante y nadie la puede olvidar.

También hay que destacar muchos mensajes que nos han llegado sobre **Heavensward**. Es una expansión que no pasa desapercibida. Sobre **Stormblood** hay que decir que su baja puntuación no quiere decir que no le guste a la gente sino que sencillamente, no es tu preferida.

Nosotros lo que aconsejamos a todos los jugadores es que lean las historias de las expansiones, que se empapen de su trama, que conozcan a los personajes y que recorran el camino junto al **Guerrero de la Luz**.