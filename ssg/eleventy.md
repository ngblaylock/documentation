# Eleventy (11ty)

## Getting Started

Eleventy is a very easy static site generator to use. I was at first discouraged by the documentation, and it seemed like it had a lot in there. The more I use it the more it makes sense. The first thing that I did was followed along with this [blog](https://www.digitalocean.com/community/tutorials/js-eleventy) and this [video](https://www.learnwithjason.dev/let-s-learn-eleventy) which helped out a lot.

## Installation

In the blog, they had you globally install Eleventy, but later I found in the 11ty documentation that it is best to locally install it. First, you need to initialize a npm project, then install Eleventy.

```bash
npm init -y
npm install --save-dev @11ty/eleventy
```

## Sass

Instead of using the Live Sass Compiler, use the [Sass plugin](https://www.npmjs.com/package/eleventy-plugin-sass). It isn't as powerful, but it does better with hot reloading. Install the npm package.

```bash
npm install eleventy-plugin-sass --save
```

The output will be a single css file (unminified) and will be placed at the root of the output folder.

::: warning
If you use NVM, you may have an issue with node-sass. Run `npm rebuild node-sass` and wait a few minutes (really, like 10 or so), then it should work.
:::

## File Structure

This is my personal preference for the file setup. All of the template files, including the `_includes` folder should be placed inside of the `pages` directory. The output will be sent to the `dist` directory, or whatever you end up setting it as (like `docs` for GitHub Pages).

In the root of the project you should put all your other non-template containing files like styles, scripts, or other assets. These are folders that you would normally use the file passthrough copy. 

```
/assets
/img
/js
/pages
  |  _includes/
  |    |  paritals/
  |  (Eleventy Template files)
/style
  |  (Sass files here)
```

## Config

Here is a pretty basic configuration file that I like to use. Basically, it outputs the build in the `dist` directory and it will include the build from the `assets`, `styles`, `img`, and `js` directories that you need to include. Also, if you have a `CNAME`, which you probably will have, it will include that as well.

::: warning
This example assumes that you are using Sass, but if you put regular CSS files in the `styles` directory, then just remove the Sass plugin and add `styles` to the passthrough copy function.
:::

```js
// .eleventy.js (in the project root)

const pluginSass = require("eleventy-plugin-sass");

module.exports = (eleventyConfig) => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  // eleventyConfig.addPassthroughCopy('./styles');

  eleventyConfig.addPlugin(pluginSass, {});

  return {
    dir: {
      input: "pages",
      output: "dist",
    },
  };
};
```

## Build and Hot Reload

By default, the script to run eleventy is pretty long and hard to remember.This script will delete the `dist` directory, then repopulate it. This solves the problem with pages created then deleted not being automatically deleted by Eleventy. the `--quiet` is to keep less text in the terminal. I changed my script in `package.json` to be the following:

```json{3}
{
  "scripts": {
    "serve": "rm -rf dist && npx @11ty/eleventy --serve --quiet"
    // "serve": "npx @11ty/eleventy --serve"
  }
}
```

Now, when you run `npm run serve` it will not only compile your website, but it will start a hot-reloaded server as well.

::: warning
The remove function only works on Mac and Linux. Windows has a slightly different command.
:::

## Layouts

Layouts are where Eleventy's power comes from. Unlike Nuxt, Eleventy is not opinionated about the JavaScript framework that you choose. You can use jQuery with Bootstrap 4 without needing to worry about any collisions with Vue.

1. Create a `_includes` folder in the `pages` direcory.
2. Add a layout. You can call it whatever you want, but probably go with something like `default.liquid`.
3. In the frontmatter, you just need to specify the layout, **or** add `pages.json` in the pages directory to set a default layout for every page.

### Example Bootstrap Starter

Create a new file called `default.njk` in the `pages/_includes/` directory. This uses Nunjucks.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="/styles/custom.css" />
    <title>{{ title }} | 11ty Sandbox</title>
  </head>
  <body>
    {{ content | safe }}
    <!-- JS, Popper.js, and jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

Notice that `content | safe` is where the input content will be placed. Also, the `title` is a piece of dynamic content brought in from the front matter.

The next page to create is the content that is placed in the template. Call this one `/index.njk`.

```html
---
layout: default
title: Home
---

<div class="container pt-5">
  <h1>11ty Test</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi
    cumque perferendis quisquam totam incidunt vel eaque. Modi laboriosam
    quisquam fugit deserunt dolorem ducimus, cumque nisi sed. Aperiam, quam
    incidunt.
  </p>
</div>
```

### Nest Layouts

You can next layouts, which is pretty neat. For example, if you have a content page where all pages need to use the container, or another page for a blog, or a left nav. Create a page called `_includes/content.liquid`.

```html
---
layout: default
---

<div class="container my-3">
  {{ content | safe }}
</div>
```

Then in all the pages that use the content, change the layout in the frontmatter from `default` to `content`.

### Default Layout for Directory

You can set a default layout for all files in a directory, such as a blog or something else. Unfortunately, I can't find a way to make a default layout for the entire project. How you do this is create a config file in the top level of the directory you want to set. For example, if you want all blog articles to use the same layout, set up a config in `/blog/blog.json` file.

```json
{
  "layout": "blog"
}
```

Now you will not need to add the layout to each page's frontmatter data. If for some reason you do need to override the layout, you should just be able to add that to the frontmatter and it will override it.

## Language Preference

Eleventy has quite a few options for languages that you can choose from. My preference is to use Nunjucks and Markdown. I started out with Liquid because their documentation was easier to pick up, but I had issues with reversing a collection, and Nunjucks didn't. Nunjucks also seems more powerful. However, [Liquid is significantly faster than Nunjucks](https://github.com/11ty/eleventy-benchmark), so if you are not doing anything more than just basic stuff, go with Liquid.

## Vue with Eleventy

::: v-pre
It took me a while to figure out that the issue I was having with using Vue with Eleventy is that there was some syntax collisions with Nunjucks/Liquid and Vue. Both use
`{{ double curly brackets }}` syntax, so using Vue in a standard template will try to convert the template before Vue. Super big thanks to [Raymond Camden's Article](https://www.raymondcamden.com/2020/04/03/quick-tip-on-using-vue-with-eleventy) for helping me find a solution. Simply wrap the entire vue section with a raw statement, and it will not convert the template syntax, so on the output directory, it will then allow Vue to run as expected.
:::

```js
{% raw %}
// vue code, probably the whole file.
{% endraw %}
```

## BrowserSync

BrowserSync is pretty cool, but sometimes you will notice that if you scroll on one page, then see the same page in a different tab or device, it will also scroll. You can turn this off by going to the BrowserSync tools (after you run the serve command) and turn it off.

## Extensions to get

### Nunjucks Template (eseom)

For the formatting, I had to disable Prettier, then select the default formatter from this extension, then enable Prettier again for Nunjucks formatting to work.

### Liquid (Νίκος)

Beware that this also tries to mess with `.html` files.

### Path Autocomplete (Mihai Vilcu)

This helps your VS Code intellisense with knowing what files you are trying to link to. You can set the root to the `dist` directory to get accurate linking. Below is an example of ways this will help. Make sure this is in your **workspace settings**, and not your user settings because this will depend on each project.

```json
"path-autocomplete.pathMappings": {
  "partials": "${folder}/pages/_includes/partials",
  "$root": ["${folder}/frontend/dist", "${folder}/frontend/pages"],
}
```

Typing `partials/` will show the contents of the partials folder. Typing `/` will look in the `dist` directory so you can easily select pages or assets to link to with thier correct file path.
