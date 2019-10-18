# Vuepress

## Using HTML in Vuepress

``` html
<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>
```

produces:

<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>


## Run in Development Mode

``` shell
sudo vuepress dev
```


## Build for Production

``` shell
sudo vuepress build
```

This will build the project to the `.vuepress/dist/` directory. Try to figure out how to get it to the `../docs` directory for easy Github deployment.