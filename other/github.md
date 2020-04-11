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

Go to [domains.google.com](https://domains.google.com) add sign in. In the DNS tab, go to the Custom Resource Records section. Add two new sections:

| Name | Type  | TTL | Data                  |
| ---- | ----- | --- | --------------------- |
| @    | A     | 1h  | 185.199.108.153       |
|      |       |     | 185.199.109.153       |
|      |       |     | 185.199.110.153       |
|      |       |     | 185.199.111.153       |
| www  | CNAME | 1h  | ngblaylock.github.io. |

## Subdomain Hookup

Go to [domains.google.com](https://domains.google.com) and sign in. In the DNS tab, go to the Custom Resoruce Records section. Add the following for a subdomain:

| Name         | Type  | TTL | Data                  |
| ------------ | ----- | --- | --------------------- |
| \<subdomain> | CNAME | 1h  | ngblaylock.github.io. |

Make sure to generate your project again, and push the repository to GitHub. You may need to wait a while for everything to make the propper connections, but you should have it ready before you know it.
