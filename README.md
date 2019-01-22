# [Basically Basic Jekyll Theme][1]

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.6-blue.svg)](https://jekyllrb.com/)
[![Ruby gem](https://img.shields.io/gem/v/jekyll-theme-basically-basic.svg)](https://rubygems.org/gems/jekyll-theme-basically-basic)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/mmistakes)

Basically Basic is a [Jekyll theme](https://jekyllrb.com/docs/themes/) meant as 
a substitute for the default [Minima](https://github.com/jekyll/minima), with a 
few enhancements thrown in for good measure:

- Clean responsive design with [six customizable skins](#skin)
- Curriculum Vitæ/Resume layout powered by [JSON data](http://registry.jsonresume.org/)
- About page layout
- Site-wide search provided by [Algolia](https://www.algolia.com/) or [Lunr](https://lunrjs.com/).
- Disqus Comments and Google Analytics support
- SEO best practices via [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag/)

**If you enjoy this theme, please consider [supporting me](https://www.paypal.me/mmistakes) for developing and maintaining it.**

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/mmistakes)

[![Basically Basic live preview][2]][1]

[1]: https://mmistakes.github.io/jekyll-theme-basically-basic/
[2]: https://cloud.githubusercontent.com/assets/1376749/24117647/6dede894-0d81-11e7-9c2c-f19bea45e219.jpg (live preview)

## Table of Contents

1. [Installation](#installation)
   1. [Ruby Gem Method](#ruby-gem-method)
   2. [GitHub Pages Method](#github-pages-method)
      1. [Remove the Unnecessary](#remove-the-unnecessary)
2. [Upgrading](#upgrading)
   1. [Ruby Gem](#ruby-gem)
   2. [Remote Theme](#remote-theme)
   3. [Use Git](#use-git)
      1. [Pull Down Updates](#pull-down-updates)
   4. [Update Files Manually](#update-files-manually)
3. [Structure](#structure)
   1. [Starting Fresh](#starting-fresh)
   2. [Starting from `jekyll new`](#starting-from-jekyll-new)
4. [Configuration](#configuration)
   1. [Skin](#skin)
   2. [Google Fonts](#google-fonts)
   3. [Text](#text)
   4. [Navigation](#navigation)
   5. [Pagination](#pagination)
   6. [Search](#search)
      1. [Lunr (default)](#lunr-default)
      2. [Algolia](#algolia)
   7. [Author](#author)
   8. [Reading Time](#reading-time)
   9. [Comments (via Disqus)](#comments-via-disqus)
   10. [Google Analytics](#google-analytics)
   11. [Copyright](#copyright)
5. [Layouts](#layouts)
   1. [`layout: default`](#layout-default)
   2. [`layout: post`](#layout-post)
   3. [`layout: page`](#layout-page)
   4. [`layout: home`](#layout-home)
   5. [`layout: posts`](#layout-posts)
   6. [`layout: categories`](#layout-categories)
   7. [`layout: tags`](#layout-tags)
   8. [`layout: collection`](#layout-collection)
   9. [`layout: category`](#layout-category)
   10. [`layout: tag`](#layout-tag)
   11. [`layout: about`](#layout-about)
   12. [`layout: cv`](#layout-cv)
6. [Images](#images)
7. [Customization](#customization)
   1. [Overriding Includes and Layouts](#overriding-includes-and-layouts)
   2. [Customizing Sass (SCSS)](#customizing-sass-scss)
   3. [Customizing JavaScript](#customizing-javascript)
   4. [SVG Icons](#svg-icons)
   5. [Customizing Sidebar Content](#customizing-sidebar-content)
8. [Development](#development)
9. [Contributing](#contributing)
10. [Credits](#credits)
11. [License](#license)

## Installation

If you're running Jekyll v3.5+ and self-hosting you can quickly install the 
theme as a Ruby gem. If you're hosting with GitHub Pages you can install as a 
remote theme or directly copy all of the theme files (see [structure](#structure) 
below) into your project.

### Ruby Gem Method

1. Add this line to your Jekyll site's `Gemfile`:

   ```ruby
   gem "jekyll-theme-basically-basic"
   ```
2. Add this line to your Jekyll site's `_config.yml` file:

   ```yaml
   theme: jekyll-theme-basically-basic
   ```

2. Then run [Bundler](http://bundler.io/) to install the theme gem and dependencies:
   
   ```terminal
   bundle install
   ```

### GitHub Pages Method

GitHub Pages has added [full support](https://github.com/blog/2464-use-any-theme-with-github-pages) 
for any GitHub-hosted theme.

1. Replace `gem "jekyll"` with:

   ```ruby
   gem "github-pages", group: :jekyll_plugins
   ```

2. Run `bundle update` and verify that all gems install properly.

3. Add `remote_theme: "mmistakes/jekyll-theme-basically-basic"` to your 
   `_config.yml` file. Remove any other `theme:` or `remote_theme:` entries.

---

**Note:** Your Jekyll site should be viewable immediately at 
<http://USERNAME.github.io>. If it's not, you can force a rebuild by 
**Customizing Your Site** (see below for more details).

If you're hosting several Jekyll based sites under the same GitHub username you 
will have to use Project Pages instead of User Pages. Essentially you rename the 
repo to something other than **USERNAME.github.io** and create a `gh-pages` 
branch off of `master`. For more details on how to set things up check 
[GitHub's documentation](https://help.github.com/articles/user-organization-and-project-pages/).

#### Remove the Unnecessary

If you forked or downloaded the `jekyll-theme-basically-basic` repo you can 
safely remove the following files and folders:

- `.editorconfig`
- `.gitattributes`
- `.github`
- `.scss-lint.yml`
- `CHANGELOG.md`
- `jekyll-theme-basically-basic.gemspec`
- `LICENSE`
- `Rakefile`
- `README.md`
- `screenshot.png`
- `/docs`
- `/example`

## Upgrading

If you're using the Ruby Gem or remote theme versions of Basically Basic, 
upgrading is fairly painless.

To check which version you are currently using, view the source of your built 
site and you should something similar to:

```
<!--
    Basically Basic Jekyll Theme 1.2.0
    Copyright 2017-2018 Michael Rose - mademistakes.com | @mmistakes
    Free for personal and commercial use under the MIT license
    https://github.com/mmistakes/jekyll-basically-theme/blob/master/LICENSE
-->
```

At the top of every `.html` file, `/assets/css/main.css`, and `/assets/js/main.js`.

### Ruby Gem

Simply run `bundle update` if you're using Bundler (have a `Gemfile`) or `gem 
update jekyll-theme-basically-basic` if you're not.

### Remote Theme

When hosting with GitHub Pages you'll need to push up a commit to force a 
rebuild with the latest [theme release](https://github.com/mmistakes/jekyll-theme-basically-basic/releases).

An empty commit will get the job done too if you don't have anything to push at 
the moment:

```terminal
git commit --allow-empty -m "Force rebuild of site"
```

### Use Git

If you want to get the most out of the Jekyll + GitHub Pages workflow, then 
you'll need to utilize Git. To pull down theme updates you must first ensure 
there's an upstream remote. If you forked the theme's repo then you're likely 
good to go.

To double check, run `git remote -v` and verify that you can fetch from `origin https://github.com/mmistakes/jekyll-theme-basically-basic.git`.

To add it you can do the following:

```terminal
git remote add upstream https://github.com/mmistakes/jekyll-theme-basically-basic.git
```

#### Pull Down Updates

Now you can pull any commits made to theme's `master` branch with:

```terminal
git pull upstream master
```

Depending on the amount of customizations you've made after forking, there's 
likely to be merge conflicts. Work through any conflicting files Git flags, 
staging the changes you wish to keep, and then commit them.

### Update Files Manually

Another way of dealing with updates is [downloading the theme](https://github.com/mmistakes/jekyll-theme-basically-basic/archive/master.zip) 
--- replacing your layouts, includes, and assets with the newer ones manually. 
To be sure that you don't miss any changes it's probably a good idea to review 
the theme's [commit history](https://github.com/mmistakes/jekyll-theme-basically-basic/commits/master) 
to see what's changed since.

Here's a quick checklist of the important folders/files you'll want to be 
mindful of:

| Name                   |     |
| ----                   | --- |
| `_layouts`             | Replace all. Apply edits if you customized any layouts. |
| `_includes`            | Replace all. Apply edits if you customized any includes. |
| `assets`               | Replace all. Apply edits if you customized stylesheets or scripts. |
| `_sass`                | Replace all. Apply edits if you customized Sass partials. |
| `_data/theme.yml`      | Safe to keep. Verify that there were no major structural changes or additions. |
| `_config.yml`          | Safe to keep. Verify that there were no major structural changes or additions. |

---

**Note:** If you're not seeing the latest version, be sure to flush browser and 
CDN caches. Depending on your hosting environment older versions of 
`/assets/css/main.css`, `/assets/js/main.js`, or `*.html` may be cached.

## Structure

Layouts, includes, Sass partials, and data files are all placed in their default 
locations. Stylesheets and scripts in `assets`, and a few development related 
files in the project's root directory.

**Please note:** If you installed Basically Basic via the Ruby Gem method, theme 
files found in `/_layouts`, `/_includes`, `/_sass`, and `/assets` will be 
missing. This is normal as they are bundled with the [`jekyll-theme-basically-basic`](https://rubygems.org/gems/jekyll-theme-basically-basic) gem.

```terminal
jekyll-theme-basically-basic
├── _data                      # data files
|  └── theme.yml               # theme settings and custom text
├── _includes                  # theme includes and SVG icons
├── _layouts                   # theme layouts (see below for details)
├── _sass                      # Sass partials
├── assets
|  ├── javascripts
|  |  └── main.js
|  └── stylesheets
|     └── main.scss
├── _config.yml                # sample configuration
└── index.md                   # sample home page (all posts/not paginated)
```

### Starting Fresh

After creating a `Gemfile` and installing the theme you'll need to add and edit 
the following files:

- [`_config.yml`](_config.yml)
- [`/_data/theme.yml`](_data/theme.yml)
- [`index.md`](index.md) 

**Note:** Consult the [**pagination**](#pagination) documentation below for
instructions on how to enable it for the home page.

### Starting from `jekyll new`

Using the `jekyll new` command will get you up and running the quickest.

Edit `_config.yml` and create `_data/theme.yml` as instructed above and you're 
good to go.

## Configuration

Configuration of site-wide elements (`lang`, `title`, `description`, `logo`, 
`author`, etc.) happens in your project's `_config.yml`. See the 
[example configuration](example/_config.yml) in this repo for additional 
reference.

|                    | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `lang`             | Used to indicate the language of text (e.g., en-US, en-GB, fr)            |
| `title`            | Your site's title (e.g., Dungan's Awesome Site)                           |
| `description`      | Short site description (e.g., A blog about grasshopper mash)              |
| `url`              | The full URL to your site (e.g., https://groverloaf.org)                  |
| `author`           | Global author information (see below)                                     |
| `logo`             | Path to a site-wide logo ~100x100px (e.g., /assets/your-company-logo.png) |
| `twitter_username` | Site-wide Twitter username, used as a link in sidebar                     |
| `github_username`  | Site-wide GitHub username, used as a link in sidebar                      |

For more configuration options be sure to consult the documentation for: 
[**jekyll-seo-tag**][jekyll-seo-tag], [**jekyll-feed**][jekyll-feed], 
[**jekyll-paginate**][jekyll-paginate], and [**jekyll-sitemap**][jekyll-sitemap].

[jekyll-seo-tag]: https://github.com/jekyll/jekyll-seo-tag
[jekyll-feed]: https://github.com/jekyll/jekyll-feed
[jekyll-paginate]: https://github.com/jekyll/jekyll-paginate
[jekyll-sitemap]: https://github.com/jekyll/jekyll-sitemap

### Skin

This theme comes in six different skins (color variations). To change skins add 
one of the following to your [`/_data/theme.yml`](_data/theme.yml) file:

| `skin: default` | `skin: night` | `skin: plum` |
| --- | --- | --- |
| ![default-skin](https://cloud.githubusercontent.com/assets/1376749/24115744/c0618c90-0d7a-11e7-8e2d-ec70f9db0c1b.png) | ![night-skin](https://cloud.githubusercontent.com/assets/1376749/24115770/d61127f8-0d7a-11e7-9158-986bee2be8e7.png) | ![plum-skin](https://cloud.githubusercontent.com/assets/1376749/24115778/db523a0e-0d7a-11e7-9452-8692b736d67e.png) |

| `skin: sea` | `skin: soft` | `skin: steel` |
| --- | --- | --- |
| ![sea-skin](https://cloud.githubusercontent.com/assets/1376749/24115788/e27d818a-0d7a-11e7-8c56-2480e9ae83fb.png) | ![soft-skin](https://cloud.githubusercontent.com/assets/1376749/24115790/e6e548e8-0d7a-11e7-8e2d-d8053e8befd1.png) | ![steel-skin](https://cloud.githubusercontent.com/assets/1376749/24115799/eb2108e8-0d7a-11e7-8cc3-a6f22e4082ee.png) |

### Google Fonts

This theme allows you to easily use [Google Fonts](https://fonts.google.com/) 
throughout the theme. Simply add the following to your 
[`/_data/theme.yml`](_data/theme.yml), replacing the font `name` and `weights` 
accordingly.

```yaml
google_fonts:
  - name: "Fira Sans"
    weights: "400,400i,600,600i"
  - name: "Fira Sans Condensed"
```

### Text

To change text found throughout the theme add the following to your 
[`/_data/theme.yml`](_data/theme.yml) file and customize as necessary.

```yaml
t:
  skip_links: "Skip links"
  skip_primary_nav: "Skip to primary navigation"
  skip_content: "Skip to content"
  skip_footer: "Skip to footer"
  menu: "Menu"
  home: "Home"
  newer: "Newer"
  older: "Older"
  email: "Email"
  subscribe: "Subscribe"
  read_more: "Read More"
  posts: "Posts"
  page: "Page"
  of: "of"
  min_read: "min read"
  present: "Present"
```

### Navigation

By default all internal pages with a `title` will be added to the "off-canvas" 
menu. For more granular control and sorting of these menu links:

1. Create a custom list to override the default setting by adding a 
`navigation_pages` array to your [`/_data/theme.yml`](_data/theme.yml) file. 

2. Add raw page paths in the order you'd like:

   ```yaml
   navigation_pages:
     - about.md
     - cv.md
   ```

Each menu link's title and URL will be populated based on their `title` and 
`permalink` respectively.

### Pagination

Break up the main listing of posts into smaller lists and display them over 
multiple pages by [enabling pagination](http://jekyllrb.com/docs/pagination/).

1. Include the `jekyll-paginate` plugin in your `Gemfile`.

   ```ruby
   group :jekyll_plugins do
     gem "jekyll-paginate"
   end
   ```

2. Add `jekyll-paginate` to `gems` array in your `_config.yml` file and the 
following pagination settings:

   ```yaml
   paginate: 5  # amount of posts to show per page
   paginate_path: /page:num/
   ```

3. Create `index.html` (or rename `index.md`) in the root of your project and 
add the following front matter:

   ```yaml
   layout: home
   paginate: true
   ```

### Search

To enable site-wide search add `search: true` to your `_config.yml`.

#### Lunr (default)

The default search uses [**Lunr**](https://lunrjs.com/) to build a search index of all your documents. This method is 100% compatible with sites hosted on GitHub Pages.

**Note:** Only the first 50 words of a post or page's body content is added to the Lunr search index. Setting `search_full_content` to `true` in your `_config.yml` will override this and could impact page load performance.

#### Algolia

For faster and more relevant search ([see demo](https://mmistakes.github.io/jekyll-theme-basically-basic-algolia-search/)):

1. Add the [`jekyll-algolia`](https://github.com/algolia/jekyll-algolia) gem to your `Gemfile`, in the `:jekyll_plugins` section.

   ```ruby
   group :jekyll_plugins do
     gem "jekyll-feed"
     gem "jekyll-seo-tag"
     gem "jekyll-sitemap"
     gem "jekyll-paginate"
     gem "jekyll-algolia"
   end
   ```

   Once this is done, download all dependencies by running `bundle install`.

2. Switch search providers from `lunr` to `algolia` in your `_config.yml` file:

   ```yaml
   search_provider: algolia
   ```

3. Add the following Algolia credentials to your `_config.yml` file. *If you don't have an Algolia account, you can open a free [Community plan](https://www.algolia.com/users/sign_up/hacker). Once signed in, you can grab your credentials from [your dashboard](https://www.algolia.com/licensing).*

   ```yaml
   algolia:
     application_id: # YOUR_APPLICATION_ID
     index_name: # YOUR_INDEX_NAME
     search_only_api_key: # YOUR_SEARCH_ONLY_API_KEY
     powered_by: # true (default), false
   ```

4. Once your credentials are setup, you can run the indexing with the following command:

   ```
   ALGOLIA_API_KEY=your_admin_api_key bundle exec jekyll algolia
   ```

   For Windows users you will have to use `set` to assigned the `ALGOLIA_API_KEY` environment variable.

   ```
   set ALGOLIA_API_KEY=your_admin_api_key
   bundle exec jekyll algolia
   ```

   Note that `ALGOLIA_API_KEY` should be set to your admin API key.

To use the Algolia search with GitHub Pages hosted sites follow [this deployment guide](https://community.algolia.com/jekyll-algolia/github-pages.html). Or this guide for [deploying on Netlify](https://community.algolia.com/jekyll-algolia/netlify.html).

**Note:** The Jekyll Algolia plugin can be configured in several ways. Be sure to check out [their full documentation](https://community.algolia.com/jekyll-algolia/options.html "Algolia configuration") on how to exclude files and other valuable settings.

### Author

Author information is used as meta data for post "by lines" and propagates the 
`creator` field of Twitter summary cards with the following front matter in 
`_config.yml`:

```yaml
author:
  name: John Doe
  twitter: johndoetwitter
  picture: /assets/images/johndoe.png
```

Site-wide author information can be overridden in a document's front matter in 
the same way:

```yaml
author:
  name: Jane Doe
  twitter: janedoetwitter
  picture: /assets/images/janedoe.png
```

Or by specifying a corresponding key in the document's front matter, that 
exists in `site.data.authors`. E.g., you have the following in the document's 
front matter:

```yaml
author: megaman
```

And you have the following in `_data/authors.yml`:

```yaml
megaman:
  name: Mega Man
  twitter: megamantwitter
  picture: /assets/images/megaman.png

drlight:
  name: Dr. Light
  twitter: drlighttwitter
  picture: /assets/images/drlight.png
```

Currently `author.picture` is only used in `layout: about`. Recommended size is 
`300 x 300` pixels.

### Reading Time

To enable reading time counts add `read_time: true` to a post or page's YAML 
Front Matter.

### Comments (via Disqus)

Optionally, if you have a [Disqus](https://disqus.com/) account, you can show a 
comments section below each post.

To enable Disqus comments, add your [Disqus shortname](https://help.disqus.com/customer/portal/articles/466208) to your project's 
`_config.yml` file:

```yaml
  disqus:
    shortname: my_disqus_shortname
```

Comments are enabled by default and will only appear in production when built 
with the following [environment value](http://jekyllrb.com/docs/configuration/#specifying-a-jekyll-environment-at-build-time): 
`JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable 
them by adding `comments: false` to that post's front matter.

### Google Analytics

To enable Google Analytics, add your [tracking ID](https://support.google.com/analytics/answer/1032385) 
to `_config.yml` like so:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Similar to comments, the Google Analytics tracking script will only appear in 
production when using the following environment value: `JEKYLL_ENV=production`.

### Copyright

By default the copyright line in the footer displays the current year 
(at build time) followed by your site's title. e.g. `© 2018 Basically Basic.`

If you would like to change this add `copyright` to your `_config.yml` file 
with appropriate text:

```yaml
copyright: "My custom copyright."
```

## Layouts

This theme provides the following layouts, which you can use by setting the 
`layout` [Front Matter](https://jekyllrb.com/docs/frontmatter/) on each page, 
like so:

```yaml
---
layout: name
---
```

### `layout: default`

This layout handles all of the basic page scaffolding placing the page content 
between the masthead and footer elements. All other layouts inherit this one 
and provide additional styling and features inside of the `{{ content }}` block.

### `layout: post`

This layout accommodates the following front matter:

```yaml
# optional alternate title to replace page.title at the top of the page
alt_title: "Basically Basic"

# optional sub-title below the page title
sub_title: "The name says it all"

# optional intro text below titles, Markdown allowed
introduction: |
    Basically Basic is a Jekyll theme meant to be a substitute for the default --- [Minima](https://github.com/jekyll/minima). Conventions and features found in Minima are fully supported by **Basically Basic**.

# optional call to action links
actions:
  - label: "Learn More"
    icon: github  # references name of svg icon, see full list below
    url: "http://url-goes-here.com"
  - label: "Download"
    icon: download  # references name of svg icon, see full list below
    url: "http://url-goes-here.com"

image:  # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml 
author:
  name: John Doe
  twitter: johndoetwitter

comments: false  # disable comments on this post
```

**Note:** Hero images can be overlaid with a transparent "accent" color to unify them with the theme's palette. To enable, [customize the CSS](#customizing-sass-scss) with the following Sass variable override:

```scss
$intro-image-color-overlay: true;
```

### `layout: page`

Visually this layout looks and acts the same as `layout: post`, with two minor 
differences.

- Author "by line" and publish date are omitted.
- Disqus comments are omitted.

### `layout: home`

This layout accommodates the same front matter as `layout: page`, with the 
addition of the following:

```yaml
paginate: true  # enables pagination loop, see section above for additional setup
entries_layout: # list (default), grid
```

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

### `layout: posts`

This layout displays all posts grouped by the year they were published. It accommodates the same front matter as `layout: page`.

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

### `layout: categories`

This layout displays all posts grouped category. It accommodates the same front matter as `layout: page`.

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

### `layout: tags`

This layout displays all posts grouped by tag. It accommodates the same front matter as `layout: page`.

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

### `layout: collection`

This layout displays all documents grouped by a specific collection. It accommodates the same front matter as `layout: page` with the addition of the following:

```yaml
collection: # collection name
entries_layout: # list (default), grid
show_excerpts: # true (default), false
sort_by: # date (default) title
sort_order: # forward (default), reverse
```

To create a page showing all documents in the `recipes` collection you'd create `recipes.md` in the root of your project and add this front matter:

```yaml
title: Recipes
layout: collection
permalink: /recipes/
collection: recipes
```

By default, documents are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter. If you want to sort the collection by title add `sort_by: title`. If you want reverse sorting, add `sort_order: reverse`.

### `layout: category`

This layout displays all posts grouped by a specific category. It accommodates the same front matter as `layout: page` with the addition of the following:

```yaml
taxonomy: # category name
entries_layout: # list (default), grid
```

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

To create a page showing all posts assigned to the category `foo` you'd create `foo.md` in the root of your project and add this front matter:

```yaml
title: Foo
layout: category
permalink: /categories/foo/
taxonomy: foo
```

### `layout: tag`

This layout displays all posts grouped by a specific tag. It accommodates the same front matter as `layout: page` with the addition of the following:

```yaml
taxonomy: # tag name
entries_layout: # list (default), grid
```

By default, posts are shown in a list view. To change to a grid view add `entries_layout: grid` to the page's front matter.

To create a page showing all posts assigned to the tag `foo bar` you'd create `foo-bar.md` in the root of your project and add this front matter:

```yaml
title: Foo Bar
layout: tag
permalink: /tags/foo-bar/
taxonomy: foo bar
```

### `layout: about`

This layout accommodates the same front matter as `layout: page`, with the 
addition of the following to display an author picture:

```yaml
author:
  name: John Doe
  picture: /assets/images/johndoe.png
```

Recommended `picture` size is approximately `300 x 300` pixels. If `author` 
object is not explicitly set in the about page's front matter the theme 
will default to the value set in `_config.yml`.

If blank there no image will appear.

### `layout: cv`

This layout accommodates the same front matter as `layout: page`. It 
leverages a [JSON-based file standard](https://jsonresume.org/schema/) for 
resume data to conveniently render a curriculum vitæ or resume painlessly.

Simply use JSON Resume's [in-browser resume builder](http://registry.jsonresume.org/) 
to export a JSON file and save to your project as `_data/cv.json`.

## Images

Suggested image sizes in pixels are as follows:

| Image | Description | Size |
| ----- | ----------- | ---- |
| `page.image.path` | Large full-width document image. | Tall images will push content down the page. `1600 x 600` is a good middle-ground size to aim for. |
| `page.image` | Short-hand for `page.image.path` when used alone (without `thumbnail`, `caption`, or other variables). | Same as `page.image.path` |
| `page.image.thumbnail` | Small document image used in grid view. | `400 x 200` |
| `author.picture` | Author page image. | `300 x 300` |

## Customization

The default structure, style, and scripts of this theme can be overridden and 
customized in the following two ways.

### Overriding Includes and Layouts

Theme defaults can be [overridden](http://jekyllrb.com/docs/themes/#overriding-theme-defaults) 
by placing a file with the same name into your project's `_includes` or 
`_layouts` directory. For instance:

- To specify a custom style path or meta data to the [`_includes/head.html `](_includes/head.html) 
file, create an `_includes` directory in your project, copy 
`_includes/head.html` from Basically Basic's gem folder to 
`<your_project>/_includes` and start editing that file.

**ProTip:** to locate the theme's files on your computer run 
`bundle show jekyll-theme-basically-basic`. This returns the location of the 
gem-based theme files.

### Customizing Sass (SCSS)

To override the default [Sass](http://sass-lang.com/guide) (located in theme's 
`_sass` directory), do one of the following:

1. Copy directly from the Basically Basic gem

   - Go to your local Basically Basic gem installation directory (run 
     `bundle show jekyll-theme-basically-basic` to get the path to it).
   - Copy the contents of `/assets/stylesheets/main.scss` from there to 
     `<your_project>`.
   - Customize what you want inside `<your_project>/assets/stylesheets/main.scss`.

2. Copy from this repo.

   - Copy the contents of [assets/stylesheets/main.scss](assets/stylesheets/main.scss) 
     to `<your_project>`.
   - Customize what you want inside `<your_project/assets/stylesheets/main.scss`.

**Note:** To make more extensive changes and customize the Sass partials bundled 
in the gem. You will need to copy the complete contents of the `_sass` directory 
to `<your_project>` due to the way Jekyll currently reads those files.

To make basic tweaks to theme's style Sass variables can be overridden by adding 
to `<your_project>/assets/stylesheets/main.scss`. For instance, to change the 
accent color used throughout the theme add the following:

```scss
$accent-color: red;
```

### Customizing JavaScript

To override the default JavaScript bundled in the theme, do one of the following:

1. Copy directly from the Basically Basic gem

   - Go to your local Basically Basic gem installation directory (run 
     `bundle show jekyll-theme-basically-basic` to get the path to it).
   - Copy the contents of `/assets/javascripts/main.js` from there to 
     `<your_project>`.
   - Customize what you want inside `<your_project>/assets/javascripts/main.js`.

2. Copy from this repo.

   - Copy the contents of [assets/javascripts/main.js](assets/javascripts/main.js) 
     to `<your_project>`.
   - Customize what you want inside `<your_project>/assets/javascripts/main.js`.

### SVG Icons

The theme uses social network logos and other iconography saved as SVGs for 
performance and flexibility. Said SVGs are located in the `_includes` directory 
and prefixed with `icon-`. Each icon has been sized and designed to fit a 
`16 x 16` viewbox and optimized with [SVGO](https://github.com/svg/svgo).

| Icon | Filename |
| --- | --- |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-arrow-left.svg" width="16" height="16"> | icon-arrow-left.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-arrow-right.svg" width="16" height="16"> | icon-arrow-right.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-bitbucket.svg" width="16" height="16"> | icon-bitbucket.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-calendar.svg" width="16" height="16"> | icon-calendar.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-codepen.svg" width="16" height="16"> | icon-codepen.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-download.svg" width="16" height="16"> | icon-download.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-dribbble.svg" width="16" height="16"> | icon-dribbble.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-email.svg" width="16" height="16"> | icon-email.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-facebook.svg" width="16" height="16"> | icon-facebook.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-flickr.svg" width="16" height="16"> | icon-flickr.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-github.svg" width="16" height="16"> | icon-github.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-gitlab.svg" width="16" height="16"> | icon-gitlab.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-googleplus.svg" width="16" height="16"> | icon-googleplus.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-instagram.svg" width="16" height="16"> | icon-instagram.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-lastfm.svg" width="16" height="16"> | icon-lastfm.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-linkedin.svg" width="16" height="16"> | icon-linkedin.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-pdf.svg" width="16" height="16"> | icon-pdf.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-pinterest.svg" width="16" height="16"> | icon-pinterest.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-rss.svg" width="16" height="16"> | icon-rss.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-soundcloud.svg" width="16" height="16"> | icon-soundcloud.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-stackoverflow.svg" width="16" height="16"> | icon-stackoverflow.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-stopwatch.svg" width="16" height="16"> | icon-stopwatch.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-tumblr.svg" width="16" height="16"> | icon-tumblr.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-twitter.svg" width="16" height="16"> | icon-twitter.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-xing.svg" width="16" height="16"> | icon-xing.svg |
| <img src="https://cdn.rawgit.com/mmistakes/jekyll-theme-basically-basic/master/_includes/icon-youtube.svg" width="16" height="16"> | icon-youtube.svg |

Fill colors are defined in the `_sass/basically-basic/_icons.scss` partial and 
set with `.icon-name` where class name matches the corresponding icon.

For example the Twitter icon is given a fill color of `#1da1f2` like so:

```html
<span class="icon icon--twitter">{% include icon-twitter.svg %}</span>
```

Alongside the SVG assets, there are icon helper includes to aid in generating 
social network links.

| Include Parameter | Description                      | Required                |
| ----------------- | ---------------------------------| ----------------------- |
| `username`        | Username on given social network | **Required**            |
| `label`           | Text used for hyperlink | Optional, defaults to `username` |

For example, the following `icon-github.html` include:

```liquid
{% include icon-github.html username=jekyll label='GitHub' %}
```

Will output the following HTML:

```html
<a href="https://github.com/jekyll">
  <span class="icon icon--github"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"></path></svg></span>
  <span class="label">GitHub</span>
</a>
```

### Customizing Sidebar Content

---

## Development

To set up your environment to develop this theme:

1. Clone this repo
2. `cd` into `/example` and run `bundle install`.

To test the theme the locally as you make changes to it:

1. `cd` into the root folder of the repo (e.g. `jekyll-theme-basically-basic`).
2. Run `bundle exec rake preview` and open your browser to 
   `http://localhost:4000/example/`. 

This starts a Jekyll server using the theme's files and contents of the 
`example/` directory. As modifications are made, refresh your browser to see 
any changes.

## Contributing

Found a typo in the documentation? Interested in adding a feature or 
[fixing a bug][issues]? Then by all means [submit an issue][new-issue] or take a
stab at submitting a [pull request][using-pull-requests]. If this is your first 
pull request, it may be helpful to read up on the [GitHub Flow][github-flow].

[issues]: https://github.com/mmistakes/jekyll-theme-basically-basic/issues
[new-issue]: https://github.com/mmistakes/jekyll-theme-basically-basic/issues/new
[using-pull-requests]: https://help.github.com/articles/using-pull-requests/
[github-flow]: https://guides.github.com/introduction/flow/

### Pull Requests

When submitting a pull request:

1. Clone the repo.
2. Create a branch off of `master` and give it a meaningful name (e.g.
   `my-awesome-new-feature`) and describe the feature or fix.
3. Open a pull request on GitHub.

Sample pages can be found in the [`/docs`](docs) and [`/example`](/example) 
folders if you'd like to tackle any "low-hanging fruit" like fixing typos, bad 
grammar, etc.

---

## Credits

### Creator

**Michael Rose**

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>
- <https://github.com/mmistakes>

### Icons + Demo Images:

- [Simple Icons](https://simpleicons.org/)
- [Noun Project](https://thenounproject.com)
- [Unsplash](https://unsplash.com/)

### Other:

- [Jekyll](http://jekyllrb.com/)
- [Susy](http://susy.oddbird.net/)
- [Breakpoint](http://breakpoint-sass.com/)

---

## License

The MIT License (MIT)

Copyright (c) 2017-2018 Michael Rose and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Basically Basic incorporates icons from [The Noun Project](https://thenounproject.com/).
Icons are distributed under Creative Commons Attribution 3.0 United States (CC BY 3.0 US).

Basically Basic incorporates photographs from [Unsplash](https://unsplash.com).

Basically Basic incorporates [Susy](http://susy.oddbird.net/),
Copyright (c) 2017, Miriam Eric Suzanne.
Susy is distributed under the terms of the [BSD 3-clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause).

Basically Basic incorporates [Breakpoint](http://breakpoint-sass.com/).
Breakpoint is distributed under the terms of the [MIT/GPL Licenses](http://opensource.org/licenses/MIT).
