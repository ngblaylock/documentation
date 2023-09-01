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

Make a page called `+error.svelte` at the root of the route directory and add this to get started:

```html
<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<a href="/" class="btn btn-secondary">Home Page</a>
```

Assuming that the adapter is `adapter-static` make sure you have this in your `svelte.config.js` file before deploying to Firebase or GitHub Pages:

```js
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
  },
}
```

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

### Google Analytics

This stems from this [issue thread](https://github.com/sveltejs/kit/issues/3127#issuecomment-1225840065). **Make sure that "Enhanced Measurement" is turned on in Google Analytics or this will not work!**

Make a component like `Analytics.svelte` and add the following code (replacing the G-XXXXXXXXXX).

``` html
<script>
  // @ts-nocheck
  import { dev } from '$app/environment';
  import { afterNavigate } from '$app/navigation';

  afterNavigate(() => {
    if (!dev) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
</svelte:head>

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

### Only run js on client

This is helpful for things like "window.*" or things that need a DOM to run.

```js
import { browser } from '$app/environment';

if(browser){
  return getComputedStyle(document.documentElement).getPropertyValue('--bs-primary');
}
```

### Constant variable in each block

[https://svelte.dev/repl/00e2468ea1b147acb25a679a1fbcb12a?version=3.46.0](https://svelte.dev/repl/00e2468ea1b147acb25a679a1fbcb12a?version=3.46.0)

In short: 

```html
{#each boxes as box}
  {@const area = box.width * box.height}
  ...
{/each}
```
