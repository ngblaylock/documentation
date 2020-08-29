# Vuepress

## Install Vuepress

A few things have changed since I set up my first Vuepress page, so take a look at the [quickstart](https://vuepress.vuejs.org/guide/getting-started.html#getting-started) which should be much easier to go off of.

One big change is that I had originally set up my site to use vuepress globally, but this way you use your local directory for vuepress using `node_modules`. This is better since you don't need to use `sudo` when running commands.

You may need to add your own scripts to the package.json file. Here are what mine look like: 

``` json
{
  "scripts": {
    "dev": "vuepress dev",
    "build": "vuepress build"
  }
}
```

## Using HTML in Vuepress

``` html
<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>
```

produces:

<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>

## Tips, Warnings, Danger Helper Boxes

::: tip
This is a tip box
:::

::: warning
This is a warning box
:::

::: danger
This is a danger box
:::

``` md
::: tip
This is a tip box
:::

::: warning
This is a warning box
:::

::: danger
This is a danger box
:::
```

You can also name the boxes for what you specifically want it to say

::: tip NOTE
This says `NOTE`, instead of `TIP`
:::

``` md
::: tip NOTE
This says `NOTE`, instead of `TIP`
:::
```

## Custom Styles

Styles in Vuepress are done with Stylus. I know, right? Anyway, the best way to go about this is do have two folders. One in `.vuepress/styles/index.styl`, and the other in `.vuepress/styles/palette.styl`. The first one is where you can add global styles that you want to change. For example, I changed the style of the `Tip` to be a blue instead of a green. The palette file is where you can change your color variables to be whatever you want. You can find more information on [Vuepress' website](https://vuepress.vuejs.org/config/#styling).

## Run in Development Mode

```
npm run dev
```

## Build for Production

```
npm run build
```

## Build to the docs folder for easy GitHub Deployment

Add the following to the `.vuepress/config.js` file.

``` js
dest: 'docs',
```

The default is `dest: '.vuepress/dist'`.

## Last Updated

The Last Updated field is automatically generated when there is a Git commit. The best way to make sure this works is to commit your work before building your Vuepress file.