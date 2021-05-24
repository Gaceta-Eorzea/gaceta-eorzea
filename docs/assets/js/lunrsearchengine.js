
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Pagina no encontradaUsa la busqueda arriba a la derecha de la pagina o visita la portada "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Acerca de la Gaceta Eorzea",
    "body": "La Gaceta Eorzea es una web de Articulos y guias de Final Fantasy XIV en Español sin animo de lucro y con la idea de fomentar una comunidad hispana en el juego. Nos puedes seguir en nuestra cuenta de twitter para estar al dia de las actualizaciones de nuestros articulos. "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categorias",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Portada",
    "body": "      Destacados:                                                                                                                                                                                                                 Traducir los diálogos y cinemáticas                              :               En este hilo voy a explicar como poder traducir los diálogos y las cinemáticas de Final Fantasy XIV Online al Español (o cualquier idioma) que. . . :                                                                                                                                                                       J0HNyRISu                                21Mayo 2021                                                                                                                      Todos los Articulos:                                                                                                     Fashion Report 21 Mayo 2021              :       Una semana mas Kaiyoko Star ha publicado la solucion para el Fashion Report, la cual podeis veir a continuacion. :                                                                               Cecile Valdelius                22Mayo 2021                                                                                                                                     Traducir los diálogos y cinemáticas              :       En este hilo voy a explicar como poder traducir los diálogos y las cinemáticas de Final Fantasy XIV Online al Español (o cualquier idioma) que queráis. :                                                                               J0HNyRISu                21Mayo 2021                                            "
    }, {
    "id": 4,
    "url": "/streamers",
    "title": "Directos de FFXIV en Español",
    "body": ""
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/fashion210521/",
    "title": "Fashion Report 21 Mayo 2021",
    "body": "2021/05/22 - Una semana mas Kaiyoko Star ha publicado la solucion para el Fashion Report, la cual podeis veir a continuacion.  Para hacer los 80 puntos y ganar 60,000 MGP necesitareis :    En la pechera The Emperor’s New Robe la cual se la podeis comprar a Tataroga en Mor Dhona (X:22. 1 Y:6. 7), sino lo podeis comprar porque no teneis desbloqueada la opcion cualquier jugador os lo puede comprar y vale solo 71 gil.     En guantes el tinte Hunter Green Dye el cual se lo podeis comprar a Ixali Vendor en North Shroud (X:24. 9 Y:22. 7) si teneis la reputacion de los Ixali subida o sino comprarlo en el Market Board ya que no suele ser muy caro.     En pantalones el tinte Ceruleum Blue Dye el cual se lo podeis comprar a Unsynrael en Limsa Lominsa Lower Decks (X:6. 0 Y:12. 3), Alaric en Old Gridania (X:14. 3 Y:8. 8) o Nanabe en Ul’dah - Steps of Thal (X:14. 2 Y:11. 0).  Recordar que teneis ademas que tener equipado un item en cada slot del equipo, a excepcion de off-hand. Sino teneis desbloqueados el fashion report lo podeis hacer mediante la quest Passion for Fashion la cual os la da Lewena en The Gold Saucer (X: 4. 8 Y: 6. 1). Por ultimo recordar que este año tenemos de nuevo el evento del Final Fantasy XV con el que podeis conseguir el coche Regalia Type-G, el cual es para 4 jugadores, y os costara 200,000 MGP por lo cual hacer el fashion report es una manera facil de conseguirlo.  "
    }, {
    "id": 7,
    "url": "/traducir/",
    "title": "Traducir los diálogos y cinemáticas",
    "body": "2021/05/21 - En este hilo voy a explicar como poder traducir los diálogos y las cinemáticas de Final Fantasy XIV Online al Español (o cualquier idioma) que queráis. Para que os hagáis una idea, nuestra idea es que vamos a superponer una pantalla encima de nuestro juego. Para esto, el juego lo vamos a poner el juego en Borderless Windowed (Venta completa maximizada) El siguiente paso es que vamos a permitir ver en el Chat los diálogos de los NPCs. Lo que hacemos es que vamos a Character Configuration y en la pestaña General, nos vamos a Log Windows Settings, bajamos y clickeamos sobre General.  Se nos abrirá una ventana que tenemos que buscar las opciones: NPC Dialogue y NPC Dialogue (Announcemets) Las activamos las dos.  Ya hemos hecho los cambios necesarios dentro del juego. Ahora vamos a bajar el programa de traducción. Se llama TataruHelper y lo podeis bajar desde este enlance. Este programa nos va a dar muchas opciones y nos va a crear una ventanita que irá traduciendo las Strings. Se puede cambiar el fondo, cambiar el tamaño, etc. Os dejo unas imágenes con mi propia configuración.  Ya, tras esto, en vuestro juego os saldrá más o menos la ventana que os voy a enseñar en la siguiente Screen. Y veréis como se traducen, en esa ventana, las distintas Strings que vayan apareciendo en el juego. Este programa no traduce Skills ni interface.  Espero que os haya ayudado el hilo para conseguir traducir el Final Fantasy XIV al Español y que disfrutéis aún más de este fantástico MMO. Un saludo! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sin resultados..</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Cerrar"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Cerrar</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Resultados de busqueda para '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Lo sentimos pero no hay resultados. Cierra y prueba una busqueda distinta</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});