# Vuepress

## Install Vuepress

```
sudo npm install -g vuepress
```

## Using HTML in Vuepress

``` html
<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>
```

produces:

<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>


## Run in Development Mode

```
sudo vuepress dev
```

## Build for Production

```
sudo vuepress build
```

## Build to the docs folder for easy GitHub Deployment

Add the following to the `.vuepress/config.js` file.

``` js
dest: 'docs',
```

The default is dest: `dest: '.vuepress/dist'`.