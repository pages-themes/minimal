# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = "jekyll-theme-minimal"
  s.version       = "0.0.3"
  s.license       = "CC0-1.0"
  s.authors       = ["Steve Smith", "GitHub, Inc."]
  s.email         = ["opensource+jekyll-theme-minimal@github.com"]
  s.homepage      = "https://github.com/pages-themes/minimal"
  s.summary       = "Minimal is a Jekyll theme for GitHub Pages"

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform      = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "~> 3.3"
end
