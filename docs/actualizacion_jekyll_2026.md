# Registro de Actualización de Jekyll y Dependencias (Abril 2026)

Este documento detalla los cambios realizados para estabilizar y actualizar el entorno de desarrollo de la Gaceta de Eorzea en Windows con Ruby 4.0.

## 1. Corrección de Errores de Instalación

Se detectó un fallo crítico al ejecutar `bundle install` debido a incompatibilidades de la gema `wdm` con la API de C de Ruby 4.0.

- **Cambio**: Se actualizó la gema `wdm` de la versión `0.1.1` a la `0.2.0`.
- **Razón**: La versión `0.2.0` incluye correcciones específicas para la compilación de extensiones nativas en versiones modernas de Ruby.

## 2. Compatibilidad con Ruby 4.0 (Gemas Desacopladas)

Ruby 4.0 (y 3.4+) ha extraído varias librerías de la "standard library" para convertirlas en gemas externas. Jekyll requiere estas librerías para funcionar.

- **Gemas Añadidas**:
    - `csv (~> 3.3)`
    - `base64 (~> 0.2)`
- **Resultado**: Se eliminó el error `LoadError: cannot load such file -- csv`.

## 3. Actualización de Versiones Principales

Se procedió a actualizar el motor del sitio y sus dependencias a las versiones más recientes disponibles a fecha de 27 de abril de 2026.

| Componente | Versión Anterior | Versión Nueva |
| :--- | :--- | :--- |
| **Jekyll** | 4.3.2 / 4.3.4 | **4.4.1** (Enero 2025) |
| **Rouge** | 4.1.0 / 4.2.0 | **4.7.0** (Diciembre 2025) |
| **Kramdown** | 2.4.0 | 2.5.2 |
| **REXML** | 3.2.5 | 3.4.4 |
| **Webrick** | 1.8.1 | 1.9.2 |

## 4. Proceso de Ejecución

1. Modificación del archivo `Gemfile`.
2. Ejecución de `bundle update` para regenerar el `Gemfile.lock`.
3. Verificación mediante `bundle exec jekyll build` y `jekyll serve`.

---
*Actualizado por Antigravity el 27 de abril de 2026.*
