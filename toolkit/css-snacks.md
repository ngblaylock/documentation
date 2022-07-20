# CSS Snacks

## Sticky Footer

Typically, sticky footers are easy with flexbox, however, you can run into issues with Internet Explorer, as well as using a header that is fixed or sticky to the page. Here is a code snippet that will allow both to work.

``` css
.outer-flex-container {
  display: flex;
}

.inner-flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

nav {
  position: sticky;
  top: 0;
}

main {
  flex: 1 0 auto;
}
```
``` html
<div class="outer-flex-container">
  <div class="inner-flex-container">
    <header>Header</header>
    <nav>Navbar</nav>
    <main>...</main>
    <footer>Footer</footer>
  </div>
</div>
```

## Internet Explorer 10/11 Only CSS

``` css
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /* IE10+ CSS here */
}
```

## Color Generator

I often like to use color variables that span from `color-100` to `color-900` but sometimes it is difficult to generate these colors. There are two tools that I like to use that make this easier to use.

- [hihayk.github.io/scale](https://hihayk.github.io/scale/#4/4/75/75/0/0/0/0/C62617/204/38/23/white) : This is best for having one color and needing to generate lighter and darker versions of it.
- [colordesigner.io](https://colordesigner.io/gradient-generator/?mode=lch#FBE6E6-27070D) : This is best for having the lightest and darkest color, then generating all the colors in between.
