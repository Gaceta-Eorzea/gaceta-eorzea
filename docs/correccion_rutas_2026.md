# Corrección de Rutas para Compatibilidad Universal (Abril 2026)

Este documento detalla los cambios realizados para asegurar que la web funcione correctamente tanto en entornos locales (`localhost`) como en despliegues de GitHub Pages (subcarpetas) y dominios personalizados (`gaceta-eorzea.com`).

## 1. El Problema Detectado

La web utilizaba rutas absolutas hardcodeadas que comenzaban con `/` (ej: `/assets/...` o `href="/discord"`). 

- **Fallo en Local/Dominio**: Funcionaba si la web estaba en la raíz.
- **Fallo en GitHub Pages**: Si la web se servía desde `usuario.github.io/repositorio/`, las rutas apuntaban a la raíz del dominio de GitHub en lugar de a la carpeta del proyecto, causando errores 404 en CSS, imágenes y enlaces.

## 2. Solución Implementada

Se ha migrado el proyecto al estándar de Jekyll para rutas relativas, utilizando el filtro `relative_url`.

### Cambios en Configuración (`_config.yml` y `_pro.yml`)
Se han definido explícitamente las variables de base:
- `url`: La URL base del sitio.
- `baseurl`: El prefijo de la carpeta (vacío para dominios personalizados, pero preparado para subcarpetas).

### Transformación de Enlaces y Recursos
Se ha realizado una sustitución masiva en los archivos principales y una modernización de los componentes:

| Tipo | Antes | Después (Correcto) |
| :--- | :--- | :--- |
| **Recursos** | `src="/assets/img.png"` | `src="{{ '/assets/img.png' | relative_url }}"` |
| **Enlaces internos** | `href="/discord"` | `href="{{ '/discord' | relative_url }}"` |
| **Enlaces de dominio** | `href="https://gaceta-eorzea.com/guia"` | `href="{{ '/guia' | relative_url }}"` |
| **Includes** | `{{ site.baseurl }}/{{ author.avatar }}` | `{{ author.avatar | relative_url }}` |

## 3. Migración Masiva de Contenido

Para garantizar que la web sea 100% independiente del hosting, se ha procesado la totalidad de los artículos y páginas:

- **Escaneo de Posts**: Se han analizado los más de 500 archivos en `_posts` y `_pages`.
- **Eliminación de Hardcoding**: Cualquier enlace que apuntaba directamente a la raíz del dominio o al dominio específico de producción (`gaceta-eorzea.com`) ha sido convertido al formato dinámico de Jekyll.
- **Portabilidad Total**: La web ahora puede moverse entre subcarpetas o diferentes dominios sin romper ningún enlace interno o imagen dentro de los artículos.

## 4. Optimizaciones de Visualización

Durante el proceso se detectaron problemas con la carga de ciertos elementos, por lo que se ajustaron los siguientes parámetros en `_config.yml`:

1. **Desactivación de Lazy Load**: Se ha cambiado `lazyimages: "disabled"`. El sistema de carga diferida estaba impidiendo que las imágenes de los posts se mostraran correctamente. Ahora las imágenes cargan de forma nativa e inmediata.
2. **Carga Estándar de Iconos**: Se han movido las hojas de estilo de Font Awesome y Google Fonts fuera del bloque `noscript`. Esto asegura que los iconos (redes sociales, búsqueda) se carguen siempre, incluso si hay retrasos en la ejecución de JavaScript.

## 5. Alcance de la Actualización

- **Archivos de Configuración**: `_config.yml` y `_pro.yml`.
- **Layouts Principales**: `_layouts/default.html`, `index.html`, `404.html`.
- **Componentes (Includes)**: `postbox.html`, `featuredbox.html`, `pagination.html` y `search-lunr.html`.
- **Contenido**: Se han actualizado **todos** los archivos en las carpetas `_posts` y `_pages` (más de 500 archivos procesados).

## 6. Cómo mantener la compatibilidad en el futuro

Al añadir nuevas imágenes o enlaces en los artículos, usa siempre el siguiente formato:

```markdown
<!-- Para imágenes -->
<img src="{{ '/assets/images/mi-imagen.jpg' | relative_url }}">

<!-- Para enlaces internos -->
<a href="{{ '/mi-articulo' | relative_url }}">Enlace</a>
```

Esto garantiza que la web nunca se rompa, independientemente de dónde esté alojada.

---
*Documentación generada por Antigravity el 27 de abril de 2026.*
