# Eleventy (11ty)

## Getting Started

Eleventy looks like it is a pretty easy static site generator to use. I was at first discouraged by the documentation, and it seemed like it had a lot in there. I am still figuring out the documentation, but it is coming together. The first thing that I did was followed along with this [blog](https://www.digitalocean.com/community/tutorials/js-eleventy) and this [video](https://www.learnwithjason.dev/let-s-learn-eleventy) which helped. However, there were a few things I had to dig in the documentation for, but it was much easier after that introduction.

## Installation

In the blog, they had you globally install Eleventy, but later I found in the 11ty documentation that it is best to locally install it. First, you need to initialize a npm project, then install Eleventy.

``` bash
npm init -y
npm install --save-dev @11ty/eleventy
```

## Build and Hot Reload

By default, the script to run eleventy is pretty long and hard to type. Since I am used to Nuxt, I changed my script in `package.json` to be the following:

``` json
{
  "scripts": {
    "serve": "npx @11ty/eleventy --serve"
  },
}
```
Now, when you run `npm run serve` it will not only compile your website, but it will build it as well. It is pretty cool once you have everything set up.

::: warning
If you move around files or directories in your project, Eleventy will not automatically delete the moved folder. One way I have found to fix this is by just deleting the output folder (probably `_site` or `docs`) and then re-running the serve command.
:::

## Config

Here is a pretty basic configuration file that I like to use. Basically, it outputs the build in the docs folder (for GitHub Pages) and it will include the build from the styles, images, and js directories that you need to include. Also, if you have a CNAME, which you probably will have, it will include that as well. 


``` js
// .eleventy.js (in the project root)

module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('CNAME');

  // Returning something from the configuration function is optional
  // Change the directory output to docs to host on GitHub Pages
  return {
    dir: {
      output: 'docs'
    }
  };
};
```

## Layouts

Layouts are where Eleventy's power comes from. Unlike Nuxt, Eleventy is not opinionated about the JavaScript framework that you choose. You can use jQuery with Bootstrap 4 without needing to worry about colliding with Vue. 

1. Create a `_includes` folder in the root direcory.
2. Add a layout. You can call it whatever you want, but probably go with something like `default.liquid`. 
3. In the frontmatter, you just need to specify the layout.

### Example Bootstrap Starter

Create a new file called `/_includes/default.liquid`.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles/custom.css">
    <title>{{ title }}
      | 11ty Sandbox</title>
  </head>
  <body>
    {{ content }}
    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>
```
Notice that `content` is where the input content will be placed. Also, the `title` is a piece of dynamic content brought in from the front matter.

The next page to create is the content that is placed in the template. Call this one `/index.liquid`.

``` html
---
layout: default.liquid
title: Home
---

<div class="container pt-5">
  <h1>11ty Test</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi cumque perferendis quisquam totam incidunt vel eaque. Modi laboriosam quisquam fugit deserunt dolorem ducimus, cumque nisi sed. Aperiam, quam incidunt.</p>
</div>
```

### Nest Layouts

You can next layouts, which is pretty neat. For example, if you have a content page where all pages need to use the container, or another page for a blog, or a left nav. Create a page called `_includes/content.liquid`.

``` html
---
layout: default.liquid
---

<div class="container my-3">
  {{ content | safe }}
</div>
```

then in all the pages that use the content, change the layout in the frontmatter from `default.liquid` to `content.liquid`.

### Default Layout for Directory

You can set a default layout for all files in a directory, such as a blog or something else. Unfortunately, I can't find a way to make a default layout for the entire project. How you do this is create a config file in the top level of the directory you want to set. For example, if you want all blog articles to use the same layout, set up a config in `/blog/blog.11tydata.json` file.

``` json
{
  "layout": "blog.liquid"
}
```

Now you will not need to add the layout to each page's frontmatter data. If for some reason you do need to override the layout, you should just be able to add that to the frontmatter and it will override it.

## Language Preference

Eleventy has quite a few options for languages that you can choose from. My preference is to use Liquid and Markdown. The reason why I choose Liquid over Nunjucks is because the [Liquid documentation](https://shopify.github.io/liquid/) is easier to follow, and [Liquid is significantly faster than Nunjucks](https://github.com/11ty/eleventy-benchmark). 

Markdown isn't as fast to compile, but it is sure easier to write. Markdown is best when writing a blog, or some other similar page.

## Vue with Eleventy

::: v-pre
It took me a while to figure out that the issue I was having with using Vue with Eleventy is that there was some syntax collisions with Liquid and Vue. Both use 
`{{ double curly brackets }}` syntax, so using Vue in a standard Liquid template will try to convert the liquid before Vue. Super big thanks to [Raymond Camden's Article](https://www.raymondcamden.com/2020/04/03/quick-tip-on-using-vue-with-eleventy) for helping me find a solution. Simply wrap the entire vue section with a raw statement, and it will not convert the liquid syntax, so on the output directory, it will then allow Vue to run as expected.
::: 

``` js
{% raw %}
// vue code
{% endraw %}
```