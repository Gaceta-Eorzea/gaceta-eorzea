---
layout: post
title:  "Como crear imágenes transparentes"
author: cecile
categories: [ herramientas ]
tags: [herramientas, guías]
image: assets/images/articles/guias/imagenes-transparentes/portada.jpg
description: "Como crear imágenes transparentes usando GShade"
featured: false
hidden: false
---
En esta guía os vamos a explicar como podéis fácilmente **utilizar GShade para crear imágenes transparentes**, las cuales podéis usar para usar como **stickers**, **emotes** o incluso crear vuestras **propias composiciones**.

<blockquote>
Si aún no sabéis que es GShade o queréis aprender como instalarlo os recomendamos la <a href="/gshade" target="_blank">guía</a> que hicimos donde tenéis todo la información.
</blockquote> 

#### Eligiendo una imagen

Primero vamos a **elegir una imagen**, en este caso Cucute ha hecho un **emote** y se ha puesto en **gpose**.

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/guias/imagenes-transparentes/original.jpg" alt="Imagen Original"/></p>

#### Usando el preset de Chromakey

Ahora abriremos GShade, *Shift+F2* por defecto, cambiaremos el preset a *Arkana > ArkanaChromaKey.ini*, el cual tiene muchas opciones pero la configuramos como se ve a continuación.

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/guias/imagenes-transparentes/chroma.jpg" alt="Opciones de Chroma"/></p>

Lo importante es que en ***Chromakey.fx*** elijamos la **distancia de donde esta el plano del Chroma**, este siempre estará **frente a la cámara**, el valor de "***Distance adjustment***", el cual suele ser un **valor bastante pequeño**, esto **alejara o acercara** ese plano, lo colocamos de manera que quede **detrás de nuestro personaje**.

Ademas debemos de poner el **color** que usaremos para **este efecto** en "***Color settings***", yo he elegido **Pure Blue** pero deberéis usar uno que **no interfiera** con los colores de vuestro personaje o glamour.

#### Ajustando GShade

Ahora vamos a hacer que GSHade haga la foto transparente para eso cambiaremos sus **Settings**.

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/guias/imagenes-transparentes/settings.jpg" alt="Opciones de GShade"/></p>

Deberemos activar la opción de ***Take Transparent "ChromaKey" Screenshots***, ademas después poner en ***Keying Color*** el mismo color que elegisteis en la configuración del ***Chromakey.fx*** en mi caso es ***Pure Blue***.

Ahora ya podemos hacer la captura usando la tecla por defecto **Shift+***(tecla **+** del teclado numerico)*.

<blockquote>
GShade <b>por defecto</b> hace las capturas en <b>formato PNG</b> si lo habéis cambiado a <b>JPG no funcionará</b> la transparencia asi que <b>cambiarlo a PNG</b> para que os funcione.
</blockquote> 

#### Recortando el resultado

La imagen que hemos hecho **sera parecida a la que mostramos a continuación**, aunque puede que no podáis ver la diferencia **la parte blanca es totalmente transparente**.

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/guias/imagenes-transparentes/precut.png" alt="Antes de Cortar"/></p>

Ahora **podemos recortarla** con el programa de edición gráfica que prefiramos y con ello tendremos **lista una imagen** que podremos usar de **sticker, emote**, o para **composición** con otras imagenes.

<p align="center"><img src="{{ site.baseurl }}/assets/images/articles/guias/imagenes-transparentes/cut.png" alt="Cortada"/></p>


Esperamos que os haya gustado esta Guía y que pronto veamos vuestras creaciones gracias a herramientas como esta.