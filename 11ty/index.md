# Eleventy (11ty)

Eleventy looks like it is a pretty easy static site generator to use. I was at first discouraged by the documentation, and it seemed like it had a lot in there. I am still figuring out the documentation, but it is coming together. The first thing that I did was followed along with this [tutorial](https://www.digitalocean.com/community/tutorials/js-eleventy) which helped. However, there were a few things in there that I went back and changed.

The first thing was the installation. The blog had you globally install Eleventy, but later I found in the 11ty documentation that it is best to locally install it. First, you need to initialize a npm project using `npm init -y`. Then run the following command to install Eleventy:

``` bash
npm install --save-dev @11ty/eleventy
```

## Build and Hot Reload

By default, the script to run eleventy is pretty long and hard to type. Since I am used to Nuxt, I changed my script in `package.json` to be the following:

``` json
{
  "scripts": {
    "serve": "npx @11ty/eleventy --serve"
  },
}
```
Now, when you run `npm run serve` it will not only compile your website, but it will build it as well. It is pretty cool once you have everything set up.

::: tip
If you move around files or directories in your project, Eleventy will not automatically delete the moved folder. One way I have found to fix this is by just deleting the output folder (probably `_site` or `docs`) and then re-running the serve command.
:::

