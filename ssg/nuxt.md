# Nuxt

## Setup Nuxt Project

Go to the command line and `cd` into the folder where you want the project to be located. Enter the following command:

```bash
npx create-nuxt-app <project-name>
```

- Use Bootstrap-Vue
- Use Prettier

## Cloned Nuxt Project from GitHub

When using a GitHub repository for your Nuxt project, it will ignore the dependencies in the `.gitattributes` file by default. This is so you don't have to store all those files that are easily installed through NPM. This means that when you clone the repository back down to another computer the dependencies required to run `npm run dev` will be missing and will not work. Run the following for it to load properly.

```sh
npm install
```

## Page Transitions

Use page transitions to keep things fresh. Simply add this code to the css file. This does not work if you are going to use page queries instead of dynamic links.

``` css
.page-enter-active, .page-leave-active{
    transition: all 0.2s ease-in-out;
}

.page-enter, .page-leave-active{
    opacity: 0;
}
```

## Develop Through Computer IP

Developing through the computer IP is helpful for developing on mobile. You can add this code to your `nuxt.config.js` file and it will allow you to access your Nuxt development environment through the same address. Make sure that your mobile device is on the same network for this to work. Then go to the exact same address on your mobile device as what appears on your computer you are developing on. [Here](https://medium.com/@jpoechill/access-your-nuxt-js-development-server-on-mobile-a4d67ac88bc6) is a good article on how to do this.

``` js
server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
```

## Generate Nuxt project

By default, the Nuxt project will be output to the `dist` folder. To change the output directory for your nuxt project, go to the `nuxt.config.js` file, add the following lines. Fallback is also required for error pages to work correctly.

```js
generate: {
    dir: "docs",
    fallback: true
},
```

In Nuxt 2.13, the `npm run generate` command is moving out in place of `npm run build`, then `npm run export`. These commands are a little long, and can require a little more configuration that comes out of the box. However, the generate command is more powerful and better in the long run. So add one line (below) to the `package.json` file and run `npm run static` for easy static generation.

```json
// in package.json, under `scripts`
"static": "nuxt build --target static && nuxt export"
```

This will build all of the files into the dir/docs/public folder in the project. From here, simply push the hosting of your choice.

::: warning
**\<2.13** Dynamic links are not crawled. You will need to update to at least 2.13 to have dynamic content statically generated.
:::
