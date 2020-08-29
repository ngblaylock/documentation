# GitHub

## GitHub Setup

In GitHub, go to the repository settings, make sure that the repository is public. If you are using Nuxt or Vue, and host the gh-pages from the `Master/docs` folder.

## CNAME file

Any custom domain needs a `CNAME` file in the root directory. For Nuxt, put it in the `static` folder. When it is in the static folder, it will automatically be pushed to the root directory when the website is generated. The domain informaiton should be the only text inside the `CNAME` file as follows:

```
<domain>.com
```

or

```
<subdomain>.<domain>.com
```

## Domain Setup

Go to [domains.google.com](https://domains.google.com) add sign in. In the DNS tab, go to the Custom Resource Records section.

| Name | Type  | TTL | Data                                                                           |
| ---- | ----- | --- | ------------------------------------------------------------------------------ |
| @    | A     | 1h  | 185.199.108.153<br />185.199.109.153<br />185.199.110.153<br />185.199.111.153 |
| www  | CNAME | 1h  | user.github.io.                                                                |
| foo  | CNAME | 1h  | user.github.io.                                                                |

In this example, the `@` would be for `bar.com`, the `www` would be for `www.bar.com`, and `foo` would be for `foo.bar.com`.

## .gitignore

Here a some specific helpful gitignore items that I should include in my little projects.

```gitignore
node_modules
.DS_Store
```
