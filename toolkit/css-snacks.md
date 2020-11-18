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