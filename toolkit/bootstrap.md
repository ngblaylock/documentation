# Bootstrap

## Bootstrap 4 Raw Boilerplate

Here is a Bootstrap 4 starter template with Font Awesome 5

``` html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Bootstrap 4 Template</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <i class="fab fa-bootstrap fa-5x"></i>
                <h1>Hello Bootstrap 4!</h1>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
</body>

</html>
```

## Bootstrap 4 Sass Variables

``` scss
// Use this Sass variable to stop the container from jumping around
$container-max-widths: (
  sm: 1167px,
  md: 1168px,
  lg: 1169px,
  xl: 1170px
);

// Change the default spacers to give a broader range and more accurate spacing options.
$spacer: 1rem;
$spacers: ();
$spacers: map-merge(
  (
    0: 0,                // 0px
    1: ($spacer * .375), // 6px
    2: ($spacer * .75),  // 12px
    3: ($spacer * 1),    // 16px
    4: ($spacer * 1.25), // 20px
    5: ($spacer * 2),    // 32px
    6: ($spacer * 4)     // 64px
  ),
  $spacers
);
```

## Customize Bootstrap Vue (Nuxt)

In order to use Sass in your nuxt project, you need to install in the `node-sass` and `sass-loader` webpack loaders.

```bash
npm install --save-dev sass@1.32.* sass-loader@10 fibers
```

You should also change in your package.json file the devDependency for sass to `"sass": "~1.32.13",`. Using the `~` will make sure it will stay on 1.32.* which ensures that compiling bootstrap won't throw compiler warnings.

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

OR

```scss
// Variable Overrides
// ...

@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// Theme Overrides
// ...

@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/images";
@import "bootstrap/scss/code";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/tables";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/transitions";
@import "bootstrap/scss/dropdown";
@import "bootstrap/scss/button-group";
@import "bootstrap/scss/input-group";
@import "bootstrap/scss/custom-forms";
@import "bootstrap/scss/nav";
@import "bootstrap/scss/navbar";
@import "bootstrap/scss/card";
@import "bootstrap/scss/breadcrumb";
@import "bootstrap/scss/pagination";
@import "bootstrap/scss/badge";
@import "bootstrap/scss/jumbotron";
@import "bootstrap/scss/alert";
@import "bootstrap/scss/progress";
@import "bootstrap/scss/media";
@import "bootstrap/scss/list-group";
@import "bootstrap/scss/close";
@import "bootstrap/scss/toasts";
@import "bootstrap/scss/modal";
@import "bootstrap/scss/tooltip";
@import "bootstrap/scss/popover";
@import "bootstrap/scss/carousel";
@import "bootstrap/scss/spinners";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/print";
@import 'bootstrap-vue/src/index.scss';

// Additional CSS
// ...
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
