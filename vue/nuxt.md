# Nuxt

## Working with Nuxt on a Subdomain

### Step 1 — Setup Nuxt Project

Go to the command line and `cd` into the folder where you want the project to be located. Enter the following command:

``` shell
npm create nuxt-app <project-name>
```

Make sure to use Prettier rather than ES Lint.

### Step 2 — Set up the SCSS files

See the `style` page for more information.

### Step 3 — Generate

In the `nuxt.config.js` file, add the following line:

``` js
generate: {
    dir: "docs"
},
```

This will build a page to the docs folder, which Github can host from the master component. More on this later. In the terminal, enter the following command:

``` shell
npm run generate
```

This will build all of the files into the docs folder in the project. From here, simply push the Github repository to your account.

### Step 4 — Github Setup

In Github, go to the repository settings, make sure that the repository is public, and host the gh-pages from the `Master/docs` folder.

### Step 5 — Domain Hookup

The first part is to create a `CNAME` file in the `static` folder in the Nuxt project. When it is in the static folder, it will automatically be pushed to production when it is generated. The domain informaiton should be the only text inside the `CNAME` file as follows:

```
<subdomain>.nathanblaylock.com
```

Now go to [domains.google.com](https://domains.google.com) add add the following for a subdomain:

``` shell
<subdomain> CNAME 1h ngblaylock.github.io.
```

Make sure to generate your project again, and push the repository to Github. You may need to wait a while for everything to make the propper connections, but you should have it ready before you know it.

## Nuxt Subpage Setup for GitHub

When working with subpages on Nuxt, we use:

``` js
router: {
  base: '/nuxt-sub/'
},
generate: {
  dir: "docs"
},
```