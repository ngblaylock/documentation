# Meta

Nuxt automatically includes Vue Meta, so you don't have to do anything. If you need it added for vue, figure it out some other way.

## Nuxt config.js Meta

This is for global meta data information. These will trickle down to the pages if they don't have anything to override it. You can also make title templates. This is also a good place to put Font Awesome and Google Fonts.

``` js
head: {
    title: "Title 1 | ",
    titleTemplate: '%s Website', // Produces 'Title 1 | Website'
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'This is a global description'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      }
    ]
  },
```

## Add Meta Data to Pages

Use this on each page. The `hid` is to make sure that the content is not duplicated.

```js
head () {
    return {
        title: this.title,
        meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'My custom description' }
        ]
    }
}
```

## Dynamically Add Title

This code will show only the title template until the object is populated.

``` js
head() {
    return {
        title: this.object.title ? this.object.title + ' | ' : ''
    }
},
```