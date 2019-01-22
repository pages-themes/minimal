# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added
- Document `site.copyright` override for customizing footer copyright text.

### Changed
- Update GitHub issue templates.

### Fixed
- Add missing `/` in icon-gitlab.html. [#80](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/80)

## [1.4.1] - 2018-08-07

### Added
- Add sample "404 not found page" to `/docs/404.html` and `/example/404.html`. [#12](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/12)

### Changed
- Adjust default skin colors to meet WCAG 2 AA. [#68](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/68)

### Fixed
- Remove extra footer from cv.html `layout`. [#69](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/69)
- Fix JavaScript error when search is not enabled. [#66](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/66)

## [1.4.0] - 2018-04-02

### Changed
- Lint JavaScript.
- Update gemspec to use jekyll-seo-tag version `2.4`. [#47](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/47)

### Added
- Accessibility enhancements for Lunr search form.
- Add SCSS `$intro-image-color-overlay` variable to enable color overlay on hero images (disabled by default). [#55](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/55)
- Add new archive layouts: `posts`, `categories`, `category`, `collection`, `tag`, and `tags`.
- Add grid layout via `entries_layout: grid` front matter.
- Add support for image thumbnails vial `image.thumbnail` front matter.

### Fixed
- Fix Firefox [flexbox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=939897) when printing pages.
- Fix search excerpts that run together because of implied spaces.
- Moved `<footer>` outside of `<main>` to be semantically correct.

## [1.3.1] - 2018-02-16

### Changed
- Only include jQuery when using default Lunr search. [#49](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/49)

### Fixed
- Focus on search input after clicking on toggle.

## [1.3.0] - 2018-02-16

### Added
- Add jQuery script.
- Add site-wide search toggle.
- Add support for [Lunr](https://lunrjs.com/) search. [#48](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/48)
- Add support for [Algolia](https://www.algolia.com/) search. [#48](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/48)
- Add [Algolia search demo](https://mmistakes.github.io/jekyll-theme-basically-basic-algolia-search/).

### Changed
- New installation and upgrade instructions.
- Absolutely position navigation menu instead of sticking it to the top.
- Visually hide "Menu" label.
- Improve alignment of menu toggle when search is enabled.

### Fixed
- Fix `border-bottom` for Gist line numbers.

## [1.2.0] - 2018-01-05

### Added
- Use [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme) for demo site.

### Changed
- Update GitHub Pages compatible installation instructions to include jekyll-remote-theme method.
- Update `site.gems` references to `site.plugins`. [#39](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/39)
- Update license and copyright.
- Improve syntax highlighting styles and colors.

### Fixed
- Fix primary navigation skip link to use correct anchor ID. [#41](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/41)
- Fix Susy deprecation warnings by updating to version 3. [#21](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/21)

## [1.1.3] - 2017-10-19

### Fixed
- Fix `{nil, "picture"=>nil"}` in `_layouts/about.html` when author image isn't set. [#34](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/34)

## [1.1.2] - 2017-09-14

### Fixed
- Adjust `/_sass/_print.scss` to reduce blank pages when printing in Chrome. [#29](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/29)
- Fix sidebar visibility bug in Firefox and Safari by adding toggling `visibility: hidden`. [#31](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/31) 

## [1.1.1] - 2017-09-06

### Changed
- Change `gems` key in `_config.yml` to `plugins`. [#23](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/23)

### Fixed
- Fix Liquid syntax error: "Expected id but found end_of_string_in `cv.skills.`" in `/cv/skills.html` include.

## [1.1.0] - 2017-03-30

### Added
- Improve installation documentation. [#8](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/8)
- Add Google Analytics tracking ID, Disqus comments, to `/docs` demo site.

### Changed
- Change source order of `.sidebar` and `.canvas` so menu items can easily be "tabbed" to. [#10](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/10)
- Refactor sidebar off-canvas menu and improve animation. [#9](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/9) [#15](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/15)
- Remove tinted background from `<th>` elements.
- Update permalink structure of `/docs` demo site.

### Fixed
- Fix `body` height and `.wrapper` box shadow. [#13](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/13)
- Fix unclickable main content links in Internet Explorer 10. [#9](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/9)

## [1.0.1] - 2017-03-23

### Added
- New responsive embed helper classes for videos. [#2](https://github.com/mmistakes/jekyll-theme-basically-basic/issues/2)
- New print styles for improved readability of printed pages. [#4](https://github.com/mmistakes/jekyll-theme-basically-basic/pull/4)
- Icon list to README.

## [1.0.0] - 2017-03-20
