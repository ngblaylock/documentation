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

## Clone Private Repo

Cloning a Private Repo is pretty easy if you are using the GitHub CLI tools. Make sure that you have downloaded [GitHub CLI](https://cli.github.com/) from the website. When you first try to run a command, it will ask you to log in to your account. Do that. Then, under the "Download Code" dropdown in the repository you want to select the "GitHub CLI" option.

The old way I did this was by doing some weird clone where you put your username and password in the command. Supposedly, this option is going away in August 2021. This option works better. 

::: tip NOTE
If you use GitHub Desktop, you can clone private repos in the app, so you don't need to do this.
:::