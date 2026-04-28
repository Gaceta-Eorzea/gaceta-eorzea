source "https://rubygems.org"

# Jekyll 4.x para mejor rendimiento y compatibilidad con Ruby 4.0
gem "jekyll", "~> 4.4.1"

# Webrick es obligatorio para Ruby 3.0+ y 4.0
gem "webrick", "~> 1.8"
gem "csv", "~> 3.3"
gem "base64", "~> 0.2"

# Soporte para Windows (monitoreo de archivos)
gem "wdm", "~> 0.2.0" if Gem.win_platform?

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-archives", "~> 2.2"
end

# Motores de renderizado y resaltado
gem "kramdown", "~> 2.4"
gem "kramdown-parser-gfm", "~> 1.1"
gem "rouge", "~> 4.7"
