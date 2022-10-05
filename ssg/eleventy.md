# Eleventy (11ty)

## Getting Started

Eleventy is a very easy static site generator to use. I was at first discouraged by the documentation, and it seemed like it had a lot in there. The more I use it the more it makes sense. The first thing that I did was followed along with this [blog](https://www.digitalocean.com/community/tutorials/js-eleventy) and this [video](https://www.learnwithjason.dev/let-s-learn-eleventy) which helped out a lot.

## Installation

In the blog, they had you globally install Eleventy, but later I found in the 11ty documentation that it is best to locally install it. First, you need to initialize a npm project, then install Eleventy.

```bash
npm init -y
npm install --save-dev @11ty/eleventy rimraf cross-env
```

## Sass

I like to use Sass for my projects, specifically to compile Bootstrap v4. Bootstrap uses node-sass, so using the same compiler is best. Unfortunately, there isn't a really good plugin with Eleventy for node-sass, but there is an effective workaround.

:::tip NOTE
If you install Bootstrap through NPM, then you don't really need to install `node-sass` since it is already there for Bootstrap.
:::

In your `package.json` file, use the following scripts. You will need to change your Sass input and output paths according to your configuration:

```json
"scripts": {
  // compile sass for production
  "sass:build:dist": "node-sass ./scss/filename.scss ./dist/style/filename.css --output-style compressed",
  // compile sass on initial eleventy development build
  "sass:build:dev": "node-sass ./scss/filename.scss ./dev/style/filename.css",
  // compile sass when a sass file changes
  "sass:watch:dev": "npm run sass:build:dev && node-sass ./scss/filename.scss ./dev/style/filename.css -w",
  // development environment
  "dev": "npm run clean && cross-env ELEVENTY_ENV=dev npx @11ty/eleventy --serve --output=dev & npm run sass:watch:dev",
  // clean the output folders before each build
  "clean": "npx rimraf ./dist ./dev",
  // build eleventy for production
  "build": "npm run clean && cross-env ELEVENTY_ENV=prod npx @11ty/eleventy --output=dist && npm run sass:build:dist",
  // other scripts
}
```

In your `.eleventy.config` you need to make sure that eleventy is aware of when your Sass file changes to rebuild the site. This filepath will need to point to wherever you keep your Sass files. You do not need to worry about any passthrough copy since Node Sass will compile your scripts directly to the output folder if you configure it correctly.

```js
module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    files: "./dev/styles/*.css",
  });
};
```

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
  |  _data/
  |  _includes/
  |  _layouts/
  |  (Eleventy Template files)
/scss
  |  (Sass files here)
```

## Config

Here is a pretty basic configuration file that I like to use. Basically, it outputs the build in the `dist` directory and it will include the build from the `assets`, `styles`, `img`, and `js` directories that you need to include. Also, if you have a `CNAME`, which you probably will have, it will include that as well.

```js
// .eleventy.js (in the project root)

module.exports = (eleventyConfig) => {
  // Direct Copy
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("style");

  // Output
  return {
    dir: {
      input: "pages",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
```

## Build and Hot Reload

By default, the script to run eleventy is pretty long and hard to remember, and there are a lot of options you can use. Here is the script to add to your `package.json` file. For Sass configuration, see the Sass section above.

```json
{
  "scripts": {
    "dev": "npm run clean && cross-env ELEVENTY_ENV=dev npx @11ty/eleventy --serve --output=dev --quiet",
    "build": "npm run clean && cross-env ELEVENTY_ENV=prod npx @11ty/eleventy",
    "clean": "npx rimraf ./dist ./dev"
  }
}
```

- `npm run clean` will use rimraf to delete the dist and the dev folder. It should work on any operating system.
- `cross-env ELEVENTY_ENV=*` will set the process.env.ELEVENTY_ENV variable. You can use that in a `_data/global.js` file if you wish. See [11ty's Documentation](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables) for more details.
- The `dev` script will hot reload and output the file to the `dev` directory.
- The `build` script will only build the file out to the `dist` directory. This will help ensure when you push your site to production, you don't contaminate it with any dev environment variables.

:::warning
Make sure that you run cross-env then immediately 11ty. Otherwise, your environment variable might not get set correctly.
:::

## Layouts

Layouts are where Eleventy's power comes from. Unlike Nuxt, Eleventy is not opinionated about the JavaScript framework that you choose. You can use jQuery with Bootstrap 4 without needing to worry about any collisions with Vue.

1. Create a `_layouts` folder in the `pages` directory.
2. Add a layout. You can call it whatever you want, but probably go with something like `default.njk`.
3. In the frontmatter, you just need to specify the layout, **or** add `pages.json` in the pages directory to set a default layout for every page.

### Example Bootstrap Starter

Create a new file called `default.njk` in the `pages/_layouts/` directory.

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
    Something here...
  </p>
</div>
```

### Nest Layouts

You can next layouts, which is pretty neat. For example, if you have a content page where all pages need to use the container, or another page for a blog, or a left nav. Create a page called `_layouts/content.njk`.

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

You can set a default layout for all files in a directory, such as a blog or something else. How you do this is create a config file in the top level of the directory you want to set. For example, if you want all blog articles to use the same layout, set up a config in `pages/blog/blog.json` file. Adding this to `pages/pages.json` will set defaults for the entire site.

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
It took me a while to figure out that the issue I was having with using Vue with Eleventy is that there was some syntax collisions with Nunjucks/Liquid and Vue. Both use `{{ double curly brackets }}` syntax, so using Vue in a standard template will try to convert the template before Vue. Super big thanks to [Raymond Camden's Article](https://www.raymondcamden.com/2020/04/03/quick-tip-on-using-vue-with-eleventy) for helping me find a solution. Simply wrap the entire vue section with a raw statement, and it will not convert the template syntax, so on the output directory, it will then allow Vue to run as expected.
:::

```js
{% raw %}
// vue code, probably the whole file.
{% endraw %}
```

## Better Logging

Eleventy comes pre-loaded with a filter to [log data to the console](https://www.11ty.dev/docs/filters/log/). However, this is kinda not helpful if you are logging a lot of data because the terminal will cut off some of the lines. To get all the lines, it is better to log them to the browser.

You can customize the output to format like a code block by using the [syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/). Be sure that you are parsing the code with markdown or else you may see html entities in place of the single or double quotes. If that doesn't work well for you, then wrapping it in a `<pre>` might be helpful.

`pages/log.md`

<!-- prettier-ignore-start -->
````markdown
---
title: Log
---

<!-- Change the `collections.all` below to whatever data value you want to look at  -->

```js
{{ collections.all | pageLog; }}
```
````
<!-- prettier-ignore-end -->

Merge this in with your `.eleventy.js` file.

```js
const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addFilter("pageLog", (content) => {
    // content is the data you want to log to the page
    return `${inspect(content)}`;
  });
};
```

## BrowserSync

BrowserSync is pretty cool, but sometimes you will notice that if you scroll on one page, then see the same page in a different tab or device, it will also scroll. You can turn this off by going to the BrowserSync tools (after you run the serve command) and turn it off.

## Extensions

### Better Nunjucks (ginfuru)

Great language support for Nunjucks in Eleventy.

### Liquid (Νίκος)

Beware that this also tries to mess with `.html` files, even if you are not using liquid in your project.

### Path Autocomplete (Mihai Vilcu)

Help with your VS Code intellisense to know what files you are trying to link to. You can set the root to the `dist` directory to get accurate linking.

- Typing `partials/` will show the contents of the partials folder.
- Typing `/` will look in the `dist` directory so you can easily select pages or assets to link to with their correct file path, like images or linking to a page.

Below is an example of ways this will help. Put the following in your workspace settings:

```json
{
  "path-autocomplete.pathMappings": {
    "partials": "${folder}/pages/_includes/partials",
    "$root": ["${folder}/dist"]
  }
}
```

### Prettier

For formatting.
