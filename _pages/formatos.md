---
layout: page
title: Formatos para la web.
permalink: /formatos
comments: false
---
Imagen y link mog station
<a href="https://sqex.to/Msp?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_mogstation" target="_blank"><img src="/assets/images/articles/noticias/ffxiv_twitch/mog.png" height="50"></a>

En esta pagina vamos a ver los formatos que se pueden usar para los articulos.

### titulo grande
texto y texto

#### titulo chico
texto y texto

#### otro chico
texto y texto

### otro grande
texto y texto

#### uno mas chico
texto y texto

Podemos poner en **negrita**, *italica*.

Tambien podemos usar HTML que ademas nos da mas cosas

Por ejemplo <b>negrita</b>, <i>italica</i>, <u>subrayado</u>.

Hacer una lista:

- a
- b
- c

O una lista enumerada:

1. a
2. b
3. c

En html

<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul> 

Tambien enumerada

 <ol>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ol> 

Podemos poner imagenes, cambiandoles el tamaño.

![Regalia Type-G]({{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg){:width="150"}

En html

<img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="150" alt="Regalia Type-G"/>

Podemos crear enlaces

[Chocobo Whistle](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/85f78cb2a87/){:target="_blank" class="eorzeadb_link"}

En html

<a href="https://na.finalfantasyxiv.com/lodestone/playguide/db/item/85f78cb2a87/" target="_blank" class="eorzeadb_link">Chocobo Whistle</a>


Imagenes que sean enlaces


[![Regalia Type-G]({{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg){:width="150"}](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/95edb909f4f/){:target="_blank" class="eorzeadb_link"}

En html

<a href="https://na.finalfantasyxiv.com/lodestone/playguide/db/item/95edb909f4f/" target="_blank" class="eorzeadb_link"><img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="150" alt="Regalia Type-G"/></a>


Podemos hacer tablas

<table border="1">
    <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
    </tr>
</table>

<br/>
Tambien tablas mas complejas

<table border="1">
    <tr>
        <th colspan="3">cabecera</th>
    </tr>
    <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
    </tr>    
    <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
    </tr>
</table>


Imagenes centradas

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="150" alt="Regalia Type-G"/></p>

Tambien podemos poner notas en le pie de una foto

<img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="250" alt="Regalia Type-G"/>
<br/>
<sub><sup>Nota en en el pie de una foto</sup></sub>

Podemos colcar texto como si fuera una cita
<blockquote>
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally. <b><i>worldwildlife.org</i></b>
</blockquote> 

Resaltes

Esto es una frase con <span class="badge bg-primary">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-secondary">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-success">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-danger">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-warning text-dark">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-info text-dark">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-light text-dark">algo</span> resaltado.<br/>
Esto es una frase con <span class="badge bg-dark">algo</span> resaltado.<br/>

Tarjetas

<div class="card" style="width: 18rem;">
  <img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="500" alt="Regalia Type-G" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Titulo de la tarjeta</h5>
    <p class="card-text">Descripcion de la tarjeta, que puede ser muy larga y detalla y tener un monton de texto.</p>
  </div>
</div>

<br/>

<div class="card">
  <div class="card-header">
    Esto es una pregunta
  </div>
  <div class="card-body">
    Esto es una respuesta
  </div>
</div>

<br/>

<div class="card">
  <div class="card-header">
    Esto es otra pregunta
  </div>
  <div class="card-body">
    Esto es otra respuesta
  </div>
</div>

<br/>

Otros tipos de listas

<ul class="list-group">
  <li class="list-group-item">un cosa</li>
  <li class="list-group-item">un cosa</li>
  <li class="list-group-item">un cosa</li>
  <li class="list-group-item">un cosa</li>
  <li class="list-group-item">un cosa</li>
</ul>

Texto en columnas

<div class="container">
  <div class="row">
    <div class="col">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
    <div class="col">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
    <div class="col">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
  </div>
</div>

Texto y imagenes, la columna de la imagen es extra larga por eso en movil ocupa todo el ancho.

<div class="container">
  <div class="row">
    <div class="col-xl">
      <img src="{{ site.baseurl }}/assets/images/articles/fashion/fashion210521/ffxivregalia.jpg" width="500" alt="Regalia Type-G">
    </div>
    <div class="col">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
  </div>
</div>

Para añadir comentarios
<!---
-->

### Sub Final

#### Tipo

<div class="container">
<div class="span2">
  <div class="row">    
    <div class="col-4 border bg-dark">
      <font color="white"><b>Tipo</b></font>
    </div>        
    <div class="col-8 border bg-dark">
      <div class="row">    
        <font color="white"><b>&nbsp;Max Personajes</b></font>
      </div>
      <div class="row">    
        <div class="col-6 border bg-secondary">
          <font color="white"><b>servidor</b></font>
        </div>    
        <div class="col-6 border bg-secondary">
          <font color="white"><b>total</b></font>
        </div>    
      </div>      
    </div>    
  </div>
  </div>
  <div class="row">
    <div class="col-4 border bg-light">
      Entry
    </div>    
    <div class="col-4 border bg-light">
      1
    </div>    
    <div class="col-4 border bg-light">
      1
    </div>        
  </div>  
  <div class="row">
    <div class="col-4 border bg-light">
      Standard
    </div>    
    <div class="col-4 border bg-light">
      8
    </div>    
    <div class="col-4 border bg-light">
      40
    </div>    
  </div>   
</div>

#### Precio

<div class="container">
<div class="span2">
  <div class="row">    
    <div class="col-4 border bg-dark">
      <font color="white"><b>Tipo</b></font>
    </div>        
    <div class="col-4 border bg-dark">
        <font color="white"><b>&nbsp;Duracion</b></font>
    </div>     
    <div class="col-4 border bg-dark">
        <font color="white"><b>&nbsp;Precio</b></font>
    </div>    
  </div>
  </div>
  <div class="row">
    <div class="col-4 border bg-light">
      Entry
    </div>    
    <div class="col-4 border bg-light">
      30 dias
    </div>    
    <div class="col-4 border bg-light">
      10.99 €
    </div>        
  </div>  
  <div class="row">
    <div class="col-4 border bg-light">
      Standard
    </div>    
    <div class="col-4 border bg-light">      
      <div class="row border">
        <div class="col border">
        30 dias
        </div>
      </div>
      <div class="row">
        <div class="col border">
        90 dias
        </div>
      </div>
      <div class="row">
        <div class="col border">
        180 dias
        </div>
      </div>            
    </div>    
    <div class="col-4 border bg-light">
      <div class="row">
        <div class="col border">
        12.99 €
        </div>
      </div>
      <div class="row">
        <div class="col border">
        11.99 €
        </div>
      </div>
      <div class="row">
        <div class="col border">
        10.99 €
        </div>
      </div>  
    </div>    
  </div>   
</div>

<div class="container">
<div class="span2">
  <div class="row">    
    <div class="col-4 border bg-dark" align="center">
      <font color="white"><b>Tipo</b></font>
    </div>        
    <div class="col-8 border bg-dark" align="center">
      <div class="row">    
        <font color="white"><b>&nbsp;Personajes máximos</b></font>
      </div>
      <div class="row">    
        <div class="col-6 border bg-secondary" align="center">
          <font color="white"><b>Servidor</b></font>
        </div>    
        <div class="col-6 border bg-secondary" align="center">
          <font color="white"><b>Total</b></font>
        </div>    
      </div>      
    </div>    
  </div>
  </div>
  <div class="row">
    <div class="col-4 border bg-light">
        Básica
    </div>    
    <div class="col-4 border bg-light" align="center">
        1
    </div>    
    <div class="col-4 border bg-light" align="center">
        8
    </div>        
  </div>  
  <div class="row">
    <div class="col-4 border bg-light">
        Estándar
    </div>    
    <div class="col-4 border bg-light" align="center">
        8
    </div>    
    <div class="col-4 border bg-light" align="center">
        40
    </div>    
  </div>   
</div>

<br/>

<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <canvas id="grafica1"></canvas>
                </div>
            </div>
        </div>
     </div>     
</div>

<br/>

<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <canvas id="grafica2"></canvas>
                </div>
            </div>
        </div>
     </div>     
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
var grafica1 = document.getElementById("grafica1");
if (grafica1) {
  new Chart(grafica1, {
  type: 'doughnut',
  data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
  });
}

var grafica2 = document.getElementById("grafica2");
if (grafica2) {
  new Chart(grafica2, {
  type: 'bar',
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
  },  
  data: {
      labels: [
        'Red1',
        'Blue1',
        'Yellow1'
      ],
      datasets: [{
        label: '',
        data: [300, 50, 100],        
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        axis: 'y',
      }]
    },
  });
}


</script>