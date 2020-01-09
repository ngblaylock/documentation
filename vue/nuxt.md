# Nuxt

## Setup Nuxt Project
Go to the command line and `cd` into the folder where you want the project to be located. Enter the following command:

```
npx create-nuxt-app <project-name>
```

- Use Bootstrap-Vue
- Use Prettier rather than ES Lint.

## Cloned Nuxt Project from GitHub
When using a GitHub repository for your Nuxt project, it will ignore the dependencies in the `.gitattributes` file by default. This is so you don't have to store all those files that are easily installed on GitHub. This means that when you clone the repository back down to another computer the dependencies required to run `npm run dev` will be missing and will not work. In the Nuxt `README.md` file it says to run `npm run install`, but this will not work and will give you an error. I believe this is an issue on Nuxt, because running the fillowing command will work much better. Note that there is no `run` in the command:

```
npm install
```

## Nuxt Style with Sass

In order to use Sass in your nuxt project, you need to install in the `node-sass` and `sass-loader` webpack loaders.

```
npm install --save-dev node-sass sass-loader
```

When changing default style with Nuxt:
1. Create a `style/custom.scss` file in the `assets` directory.
2. Create a `style/_custom-vars.scss` file in the `assets` directory. This should hold all variables you want to use in the `*.vue` files in the `<style>` tag.
3. Inside the `style/custom.scss` file, enter the following:

``` scss
// THIS INCLUDES ALL THE CSS OVERRIDES
@import "custom-vars";
// THIS WILL INCLUDE THE BOOTSTRAP CSS
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
// WRITE ANY OTHER CSS HERE YOU WANT GLOBALLY IN THE PROJECT
```

4. Inside the `nuxt.config.js` file, include the following:

``` js
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

``` scss
@import "~assets/style/_custom-vars.scss";
// or: @import "~assets/style/custom-vars";
```

## Generate Nuxt project

By default, the Nuxt project will be output to the `dist` folder. To change the output directory for your nuxt project, go to the `nuxt.config.js` file, add the following line:

``` js
generate: {
    dir: "docs"
},
```

This will build a page to the docs folder, which Github can host from the master component. More on this later. In the terminal, enter the following command:

```
npm run generate
```

This will build all of the files into the docs folder in the project. From here, simply push the Github repository to your account.

## Domain Hookup with GitHub Pages

### GitHub Setup

In GitHub, go to the repository settings, make sure that the repository is public, and host the gh-pages from the `Master/docs` folder.

### Subdomain Hookup

The first part is to create a `CNAME` file in the `static` folder in the Nuxt project. When it is in the static folder, it will automatically be pushed to production when it is generated. The domain informaiton should be the only text inside the `CNAME` file as follows:

```
<subdomain>.nathanblaylock.com
```

Now go to [domains.google.com](https://domains.google.com) add add the following for a subdomain:

```
<subdomain> CNAME 1h ngblaylock.github.io.
```

Make sure to generate your project again, and push the repository to Github. You may need to wait a while for everything to make the propper connections, but you should have it ready before you know it.

### Subpage in Domain Setup

When working with subpages on Nuxt, the root folder for the router needs to be changed for page navigation to work correctly. Enter the following in we use:

``` js
router: {
  base: '/nuxt-sub/'
},
generate: {
  dir: "docs"
},
```