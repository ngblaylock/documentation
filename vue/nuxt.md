# Nuxt

## Setup Nuxt Project

Go to the command line and `cd` into the folder where you want the project to be located. Enter the following command:

```bash
npx create-nuxt-app <project-name>
```

- Use Bootstrap-Vue
- Use Prettier rather than ES Lint.

## Cloned Nuxt Project from GitHub

When using a GitHub repository for your Nuxt project, it will ignore the dependencies in the `.gitattributes` file by default. This is so you don't have to store all those files that are easily installed on GitHub. This means that when you clone the repository back down to another computer the dependencies required to run `npm run dev` will be missing and will not work. In the Nuxt `README.md` file it says to run `npm run install`, but this will not work and will give you an error. I believe this is an issue on Nuxt, because running the fillowing command will work much better. Note that there is no `run` in the command:

```bash
npm install
```

## Customize Bootstrap with Sass

In order to use Sass in your nuxt project, you need to install in the `node-sass` and `sass-loader` webpack loaders.

```bash
npm install --save-dev node-sass sass-loader
```

When changing default style with Nuxt:

1. Create a `style/custom.scss` file in the `assets` directory.
2. Create a `style/_custom-vars.scss` file in the `assets` directory. This should hold all variables you want to use in the `*.vue` files in the `<style>` tag.
3. Inside the `style/custom.scss` file, enter the following:

```scss
// THIS INCLUDES ALL THE CSS OVERRIDES
@import "custom-vars";
// THIS WILL INCLUDE THE BOOTSTRAP CSS
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
// WRITE ANY OTHER CSS HERE YOU WANT GLOBALLY IN THE PROJECT
```

4. Inside the `nuxt.config.js` file, include the following:

```js
css: [
 '@/assets/style/custom.scss' // THIS LOADS THE CUSTOM & BOOTSTRAP CSS
],
modules: [
 // Doc: https://bootstrap-vue.js.org
 'bootstrap-vue/nuxt' // THIS INCLUDES THE JAVASCRIPT NECESSARY FOR THE MOBILE NAVBAR, MODAL, ETC.
],
bootstrapVue: {
 bootstrapCSS: false, // THIS RESOLVES DUPLICATE BOOTSTRAP CSS, IF INCLUDED IN THE CUSTOM.SCSS
 bootstrapVueCSS: false // THIS RESOLVES DUPLICATE BOOTSTRAP CSS, IF INCLUDED IN THE CUSTOM.SCSS
},
```

5. If you need to use variables inside a `*.vue` file, you can import just the variables with the following:

```scss
@import "~assets/style/_custom-vars.scss";
// or: @import "~assets/style/custom-vars";
```

## Custom Error Page

The Nuxt documentation is a little misleading. What I was able to get to work for static websites to host on Firebase and GitHub pages is to use 3 different pages for the error page. The first page is in `pages/404.vue`. This page should contain only the following:

``` js
<script>
export default {
  layout: 'errortemplate'
}
</script>
```

That is it. No template, nothing. The next page is to create the `layouts/errortemplate.vue` page, which should have the following:

``` html
<template>
  <div>
      <Nuxt />
  </div>
</template>
```

Feel free to include any styles with this as well. But in itself, this is all you need as a minimum. Then create another page in `layouts/error.vue`. This is where the actual content of the error page lives. The code could look like the following, including any styling you choose to have:

``` js
<template>
  <div>
      <h1>The page could not be found.</h1>
      <nuxt-link to="/">Back to Homepage</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'errortemplate'
}
</script>

<style>
/*Any style you choose here*/
</style>
```

What this essentially does, is if there is a page error it goes to the 404 page and displays nothing. Nuxt then says, huh, nothing is here, then throws in the error content. There is only a split second in between, so you don't really see any errors.

## Page Transitions

Use page transitions to keep things fresh. Simply add this code to the css file. This does not work if you are going to use page queries instead of dynamic links.

``` css
.page-enter-active, .page-leave-active{
    transition: all 0.2s ease-in-out;
}

.page-enter, .page-leave-active{
    opacity: 0;
}
```

## Develop Through Computer IP

Developing through the computer IP is helpful for developing on mobile. You can add this code to your `nuxt.config.js` file and it will allow you to access your Nuxt development environment through the same address. Make sure that your mobile device is on the same network for this to work. Then go to the exact same address on your mobile device as what appears on your computer you are developing on. [Here](https://medium.com/@jpoechill/access-your-nuxt-js-development-server-on-mobile-a4d67ac88bc6) is a good article on how to do this.

``` js
server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
```

## Generate Nuxt project

By default, the Nuxt project will be output to the `dist` folder. To change the output directory for your nuxt project, go to the `nuxt.config.js` file, add the following line:

```js
generate: {
    dir: "docs"
},
```

In Nuxt 2.13, the `npm run generate` command is moving out in place of `npm run build`, then `npm run export`. These commands are a little long, and can require a little more configuration that comes out of the box. However, the generate command is more powerful and better in the long run. So add one line (below) to the `package.json` file and run `npm run static` for easy static generation.

```json
// in package.json, under `scripts`
"static": "nuxt build --target static && nuxt export"
```

This will build all of the files into the docs folder in the project. From here, simply push the GitHub repository to your account.

::: warning
**\<2.13** Using Dynamic links with the generate command will not give you the pages you expect. The only way to navigate to those links is by clicking through the application. You cannot simply copy and paste the URL and share it with someone. It will return a 404 page error. If you need dynamic data that works with the generate command, consider using URL Queries.

**\>2.13** Dynamic pages are generated if there is info avalable for the new crawler to go over. This would work for an API that you get, but it would only travel through during the time of generate. This wouldn't work well for firebase, where you are continually creating, reading, updating, and deleting data. A better use for this to look into would be a SPA fallback.
:::

## Domain Hookup with GitHub Pages

### GitHub Setup

In GitHub, go to the repository settings, make sure that the repository is public, and host the gh-pages from the `Master/docs` folder.

### Host as subpage

When working with subpages on Nuxt, the root folder for the router needs to be changed for page navigation to work correctly. Enter the following in nuxt.config.js:

```js
router: {
  base: '/nuxt-sub/'
},
generate: {
  dir: "docs"
},
```
