# SvelteKit

Now that I have moved to Svelte 5, these docs should be focused on that version.

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

To make variables accessible from any and add the following to `svelte.config.js`. The file paths are relative to the config file.

``` js
import {sveltePreprocess} from 'svelte-preprocess';

const config = {
  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @import './src/sass/_variables.scss';
          @import './node_modules/bootstrap/scss/mixins/_breakpoints.scss';
        `,
      },
    }),
  ],
};
```

To add global styles to all pages, add the following to the main `+layout.svelte` file.

```html
<script>
  import '../sass/style.scss';
</script>
```

## Generating a Static Site

To generate a static website you must set the adapter to `@sveltejs/adapter-static` in the `svelte.config.js` file. That way when you run `npm run build` it makes a static site instead of a SSR website.

```js
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
  },
}
```

Another important thing to add is create a `+layout.js` at the root of the `src` directory. Add the following to that file:

```js
export const prerender = true;
export const trailingSlash = 'always';
```

## Error Page

Make a page called `+error.svelte` at the root of the route directory and add this to get started:

```html
<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status} - {$page.error?.message}</h1>
<a href="/">Home Page</a>
```

Assuming that the adapter is `adapter-static` make sure you have this in your `svelte.config.js` file before deploying to Firebase or GitHub Pages:

```js
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic({
      fallback: '404.html',
    }),
  },
}
```

## Deploying to GitHub Pages

::: info Alternative Option
Instead of this process here, you can use GitHub Actions. See [SvelteKit's Documentation](https://kit.svelte.dev/docs/adapter-static#github-pages) for details
:::

One thing that tripped me up was that there were a lot of files that were ignored from GitHub Pages. After doing research and waiting for the domain to correctly register, I found that directories and files preceding with an `_` are ignored by default. To fix this, simply add a `.nojekyll` file in the static directory. This is an empty file and you don't need to do anything but create it.

The next thing to do is to change the output directory from `build` to `docs`. In the `svelte.config.js` file, make sure the following is there:

```js
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic({
      pages: 'docs',
      assets: 'docs',
    }),
  },
}
```

Then in GitHub make sure the pages is hosted from the master branch at /docs. 

I don't know how to do this at a sub path, this will only work at a subdomain setup.

## Typings

With Svelte 5 I guess it is recommended to just use JS instead of TS and use jsDoc syntax for typings. I'm okay with this, but I am learning a few things as I go along. Here are some things that were hard to find.

### Children Props

```js
/**
 * @type {{
 *  href: string,
 *  theme: string,
 *  children: import('svelte').Snippet
 *  class?: string
 * }}
 */
let { href = '', theme = 'primary', children, class: classList = '' } = $props();
```

### Class Props

```html
<script>
/**
 * @type {{
 *  class?: string
 * }}
 */
let { class: classList = '' } = $props();
</script>

<div class="{classList}">Hello World</div>
```

## Create Elemental Components

I really like how Nuxt will auto-import components for you. There are libraries out there for this, but they all seem to have some shortcomings. This is my solution that isn't automatic, but just a one-liner.

You can add these files:

``` svelte
// src/components/Elemental/Btn.svelte
<button class="btn btn-primary"><slot /></button>
```

``` ts
// src/components/Elemental/index.ts
export { default as Btn } from './Btn.svelte';
```

And use it like this:

``` svelte
<script lang="ts">
  import * as E from '$components/Elemental';
</script>

<E.Btn>Hello</E.Btn>
```

I would recommend that you add a snippet for each one. You would probably want to do that anyway.

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

### Include package.json Version on Page

This will dynamically change the version number of your package on a page wherever you need it to show up.

**Step 1.** Define `__APP_VERSION__` in `vite.config.ts`

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [ sveltekit() ],
  define: {
    __APP_VERSION__: JSON.stringify(
      process.env.npm_package_version || 'unknown',
    ),
  },
});

```

**Step 2.** Add the type to `app.d.ts` to resolve errors

```ts
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
  const __APP_VERSION__: string; // Version of the app, set in vite.config.ts
}

export {};
```

**Step 3.** Use it in your Svelte page or component

```svelte
<script lang="ts">
  let appVersion = __APP_VERSION__;
</script>

{appVersion}
```

### Only run js on client

This is helpful for things like "window.*" or things that need a DOM to run. You can also use the `OnMount()` hook.

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
