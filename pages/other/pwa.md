# PWA

## Manifests

The manifest is a way to tell a webpage how to behave as a PWA. This is linked in the HTML head tag like `<link rel="manifest" href="/site.webmanifest"/>`.

Here is an example of the `site.webmanifest` file for Scoresheet, and assets can be found on [Figma](https://www.figma.com/design/gUpl3smnXgtPlhdIGjNWvq/Personal-Apps?node-id=1679-117):

```json
{
  "name": "Scoresheet",
  "theme_color": "#350808",
  "background_color": "#ffffff",
  "display": "standalone", 
  "start_url": "/",
  "scope": "/", 
  "icons": [
    {
      "note": "This is used for the chrome://apps page, but needs additional padding.",
      "src": "/web-app-manifest-192x192-maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "note": "This is used for the mac toolbar icon, but needs additional padding.",
      "src": "/web-app-manifest-512x512-maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "note": "This is used for creating a PWA on chrome as a preview.",
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "/img/screenshots/screenshot-1280-720-1.jpg",
      "sizes": "1280x720",
      "type": "image/jpg",
      "form_factor": "wide",
      "label": "Initialize a game by adding players."
    },
    {
      "src": "/img/screenshots/screenshot-1280-720-2.jpg",
      "sizes": "1280x720",
      "type": "image/jpg",
      "form_factor": "wide",
      "label": "Add scores for each round."
    },
    {
      "src": "/img/screenshots/screenshot-1280-720-3.jpg",
      "sizes": "1280x720",
      "type": "image/jpg",
      "form_factor": "wide",
      "label": "During a game, view the current standings in a table format."
    },
    {
      "src": "/img/screenshots/screenshot-1280-720-4.jpg",
      "sizes": "1280x720",
      "type": "image/jpg",
      "form_factor": "wide",
      "label": "During a game, view the current standings in a chart format."
    },
    {
      "src": "/img/screenshots/screenshot-1280-720-5.jpg",
      "sizes": "1280x720",
      "type": "image/jpg",
      "form_factor": "wide",
      "label": "Ending a game displays a podium view."
    },
    {
      "src": "/img/screenshots/screenshot-375-812-1.jpg",
      "sizes": "375x812",
      "type": "image/jpg",
      "form_factor": "narrow",
      "label": "Initialize a game by adding players."
    },
    {
      "src": "/img/screenshots/screenshot-375-812-2.jpg",
      "sizes": "375x812",
      "type": "image/jpg",
      "form_factor": "narrow",
      "label": "Add scores for each round."
    },
    {
      "src": "/img/screenshots/screenshot-375-812-3.jpg",
      "sizes": "375x812",
      "type": "image/jpg",
      "form_factor": "narrow",
      "label": "During a game, view the current standings in a table format."
    },
    {
      "src": "/img/screenshots/screenshot-375-812-4.jpg",
      "sizes": "375x812",
      "type": "image/jpg",
      "form_factor": "narrow",
      "label": "During a game, view the current standings in a chart format."
    },
    {
      "src": "/img/screenshots/screenshot-375-812-5.jpg",
      "sizes": "375x812",
      "type": "image/jpg",
      "form_factor": "narrow",
      "label": "Ending a game displays a podium view."
    }
  ]
}
```

## Icons

Icons need to be specifically designed for the purpose in the manifest. A `maskable` image needs additional padding to allow the OS to fit it to their constraint. MacOS will use the maskable image to make it the rounded square icon on the toolbar, and Chrome will use the maskable image to fit it in the chrome://apps page with the circle icon.

![PWA Icons Example](/pwa-icons-example.png)

iOS devices do not use the manifest for icons, that I know of. Instead provide a link to an `apple-touch-icon`. This image will fit the rounded corner of the icon, but you don't need to add extra padding to the icon.

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon.png"
/>
<meta
  name="apple-mobile-web-app-title"
  content="Scoresheet"
/>
```

## Service Workers

This is my setup for Scoresheet to get service workers working. It is in the top level of the `src/routes` directory in a sveltekit app. This should allow the app to work in offline mode, but there were issues on Android.

``` js
// Copied directly from the SvelteKit documentation
// https://svelte.dev/docs/kit/service-workers

/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});
```