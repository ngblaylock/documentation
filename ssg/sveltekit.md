# SvelteKit

## Sass

SvelteKit comes with the preprocessor already available. All you need to do is run `npm install Sass -D`. 

To make variables accessible from any and add the following to svelte.config.js.

``` js
preprocess: preprocess({
  scss: {
    prependData: `@import './src/sass/_variables.scss';`
  }
}),
```

To add global styles to all pages, add the following to the main +layout.svelte file.

```html
<svelte:head>
	<style lang="scss">
		@import '../sass/style.scss';
	</style>
</svelte:head>

<slot />
```

or

```html
<script lang="ts">
  import '../sass/style.scss'
</script>
```

## Nuggets

https://github.com/sveltejs/kit/issues/3127#issuecomment-1225840065

``` html
<!-- src/routes/+layout.svelte -->
<script>
  import '$lib/javascript-that-should-run-before-hydration.js';
  import './global.css';
  import { afterNavigate } from '@sveltejs/kit';
  
  afterNavigate(() => {
    // this will run after every single navigation, making it an
    // ideal place to put e.g. analytics tracking code etc
  });
</script>
```