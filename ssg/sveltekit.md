# SvelteKit

## Configuration

You can add alias' to certain folders for importing. It is handy especially since there are no auto imports. VS Code can help with the import process, but having this sort of alias is handy to help it find what you are looking for.

```js
//svelte.config.js

const config = {
  kit: {
    alias: {
      $components: './src/lib/components',
    },
  },
};
```

You can use a cool experimental feature that allows you to click your page and it will take you to the code in VS Code. This makes it so when you are in Development mode you can hold Command+Shift and hover over an element to click. Documentation on the feature is found at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector

```js
//svelte.config.js

const config = {
  // ... Other configuration
  vitePlugin: {
    experimental: {
      inspector: {
        toggleKeyCombo: 'meta-shift',
        holdMode: true,
        showToggleButton: 'never',
      }
    },
  },
};
```

## Sass

SvelteKit comes with the preprocessor already available. All you need to do is run `npm install Sass -D`. 

To make variables accessible from any and add the following to svelte.config.js.

``` js
import preprocess from 'svelte-preprocess';

const config = {
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/style/app.scss';`
        }
    })
    ...
};
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

## Generating a Static Site

To generate a static website you must set the adapter to `@sveltejs/adapter-static` in the svelte.config.js file. That way when you run `npm run build` it makes a static site instead of a SSR website.

Another important thing to add is create a `+layout.**ts**` at the root of the `src` directory. Add the following to that file:

```ts
export const prerender = true;
export const trailingSlash = 'always';
```

## Error Page

I haven't quite figured this out, but the +error.svelte page does not directly transfer over to the 404.html page. I need to look into this a little more.

## Deploying to GitHub Pages

One thing that tripped me up was that there were a lot of files that were ignored from GitHub Pages. After doing research and waiting for the domain to correctly register, I found that directories and files preceding with an `_` are ignored by default. To fix this, simply add a `.nojekyll` file in the static directory. This is an empty file and you don't need to do anything but create it.

The next thing to do is to change the output directory from `build` to `docs`. In the `svelte.config.js` file, make sure the folowing is there:

```js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
    })
  }
};

```

Then in GitHub make sure the pages is hosted from the master branch at /docs. 

I don't know how to do this at a sub path, this will only work at a subdomain setup.

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

### Comments in VS Code on hover

Add this to the beginning of a component. When you hover over that component reference this will show up.

```html
<!--
  @component
  ## Title
  You can use `markdown` in this.
-->
```
