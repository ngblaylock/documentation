# PWA

## Icons

I have a test at pwa.nathanblaylock.com and am trying out some sizes:

```json
...
icons: [
  {
    src: "icons/icon_48.png",
    sizes: "48x48",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_72.png",
    sizes: "72x72",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_96.png",
    sizes: "96x96",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_128.png",
    sizes: "128x128",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_192.png",
    sizes: "192x192",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_384.png",
    sizes: "384x384",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_512.png",
    sizes: "512x512",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: "icons/icon_512.png",
    sizes: "512x512",
    type: "image/png",
  },
],
```

- When you are installing it in Chrome on Mac the preview icon is 96px, and the PWA icon is 128px. 
- If you go to `chrome://apps` it shows it using the 72px version.
- When you are installing it in Safari on iOS the preview icon is 128px, and the icons size is also 128px.
- On Android when installing the preview icon is 384px, which is also the splash screen image. The App icon is also 384px.
- You need to have one image that isn't maskable.
- TODO: look at it on Windows

## Installation