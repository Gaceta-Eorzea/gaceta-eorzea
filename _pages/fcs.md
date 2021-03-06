---
layout: page
title: Directorio de Free Company
permalink: /fcs
image: assets/images/articles/noticias/directorio/directorio.png
comments: false
---

<div class="container">
{% include youtube.html id='W7ksKL08n08' %}
</div>
<br/>
Si quieres salir en este **directorio** y en los **videos** que **Zarovich** ira creando **rellena** <a href="https://forms.gle/83z2pDiKRvHPKKxU6" target="_blank">este formulario</a>.<br/>
<sub><sup><i>Este listado esta ordenado <b>alfabéticamente</b></i>.</sup></sub>

<!-- ## REGIONS -->
<ul class="nav nav-tabs" id="regionsTab" role="tablist">
    {% for region in site.data.regions %}
    <li class="nav-item" role="presentation">
        <a class="nav-link {% if region.active %} active{% endif %}" id="{{ region.id }}-tab" data-toggle="tab" href="#{{ region.id }}" role="tab" aria-controls="{{ region.id }}" aria-selected="true">{{ region.name }}</a>        
    </li>
    {% endfor %}
</ul>
<div class="tab-content" id="regionsTabContent">
    {% for region in site.data.regions %}
    <div class="tab-pane fade show {% if region.active %} active{% endif %}" id="{{ region.id }}" role="tabpanel" aria-labelledby="{{ region.id }}-tab">   
        <!-- ## DCS -->
        <ul class="nav nav-tabs" id="region{{ region.id }}Tab" role="tablist">
        {% for dc in site.data.dcs %}
            {% if dc.region == region.id %}
            <!-- ## DC -->
            <li class="nav-item" role="presentation">
                <a class="nav-link {% if dc.active %} active{% endif %}" id="{{ dc.id }}-tab" data-toggle="tab" href="#{{ dc.id }}" role="tab" aria-controls="{{ dc.id }}" aria-selected="true">{{ dc.name }}</a>        
            </li>
            <!-- DC ## -->
            {% endif %}
        {% endfor %}
        </ul>
        <div class="tab-content" id="region{{ region.id }}TabContent">
        {% for dc in site.data.dcs %}
            {% if dc.region == region.id %}
            <div class="tab-pane fade show {% if dc.active %} active{% endif %}" id="{{ dc.id }}" role="tabpanel" aria-labelledby="{{ dc.id }}-tab">
                <!-- ## SERVERS -->
                <ul class="nav nav-tabs" id="dcServers{{ dc.id }}Tab" role="tablist">
                {% for server in site.data.servers %}
                    {% if server.dc == dc.id %}
                    <!-- ## DC -->
                    <li class="nav-item" role="presentation">
                        <a class="nav-link {% if server.active %} active{% endif %}" id="{{ server.id }}-tab" data-toggle="tab" href="#{{ server.id }}" role="tab" aria-controls="{{ server.id }}" aria-selected="true">{{ server.name }}</a>        
                    </li>
                    <!-- DC ## -->
                    {% endif %}
                {% endfor %}
                </ul>
                <div class="tab-content" id="dcServers{{ dc.id }}TabContent">
                {% for server in site.data.servers %}
                    {% if server.dc == dc.id %}
                    <div class="tab-pane fade show {% if server.active %} active{% endif %}" id="{{ server.id }}" role="tabpanel" aria-labelledby="{{ server.id }}-tab">                        
                        {% assign total_fcs = 0 %}
                        {% for fc in site.data.fcs %}
                            {% if fc.server == server.id %}
                            {% assign total_fcs = total_fcs | plus:1 %}
                            <div class="card">
                                <div class="card-header">
                                    <b>{{ fc.name }} &lt;&lt;{{ fc.tag }}&gt;&gt;</b>
                                </div>
                                <div class="card-body">
                                    <p align="center">
                                    <img src="/assets/images/fcs/eternia.jpg"><br/>
                                    </p>
                                    <div class="container">
                                        <div class="span2">
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Foco</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.foco }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Descripción</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.descripcion }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Miembros</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.miembros }}
                                            </div>
                                        </div>                                        
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Lider</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.lider }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Contactos</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.contactos }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Redes</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.redes }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                            <b>Dirección</b>
                                            </div>
                                            <div class="col-7">
                                            {{ fc.direccion }}
                                            </div>
                                        </div> 
                                        </div>                                                                                                                                                                                                         
                                    </div>
                                </div>
                            </div> 
                            <br/>
                            {% endif %}
                        {% endfor %}         
                        {% if total_fcs == 0 %}
                            Ahora mismo no tenemos información disponible de Free Company en {{ server.name }}.
                        {% endif %}                                      
                    </div>
                    {% endif %}
                {% endfor %}            
                </div>
                <!-- SERVERS ## -->
            </div>
            {% endif %}
        {% endfor %}            
        </div>
        <!-- DCS ## -->
    </div>
    {% endfor %}
</div>
<!-- REGIONS ## -->

