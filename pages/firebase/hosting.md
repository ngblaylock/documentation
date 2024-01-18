# Hosting

Before anything else, you need to make sure that you go to the firebase console and start a new project.

Make sure that you have the firebase command line tools installed.

```
sudo npm install -g firebase-tools
```

::: warning
If you are on a Linux, you need to be using NVM, not Node from the Software store. If you are using NVM, you do not need to include `sudo` in your command.
:::

## Log in to Firebase.

```
firebase login
```

This will open up a webpage where you select your account and log in. Select `Allow` to give Firebase the propper permissions. Once authenticated, you can go back to the code editor. You may only need to do this once per computer.

## Initiate your Project

`cd` into your root directory in the terminal, and type in the following command:

```
firebase init
```

This CLI will ask multiple questions. Follow the instructions there depending on what end result you are hoping for.


## Deploy

If you want to double check the functionality of the project before deploying, run the following command.

```
firebase serve
```

When you are ready to push the site live, run:

```
firebase deploy
```

or to leave a message for the deploy (viewd in the console under versions), run:

```
firebase deploy -m "Deploying the best new feature ever."
```

## Set Up Staging and Production Sites

In the firebase console in your browser, head to the hosting section. Add a new site to your project. If you are just creating a site without a database, you don't need to create a new project. When you create the site, be sure to call it something like `project-name-stage`. You should then have two sites, one with the name of the project, and another staging site. 

::: warning
If you have already initialized hosting for the website without the staging site, you first need to go back and delete the `.firebase` directory, as well as `firebase.json` and `.firebaserc` files. There was something cached there that caused issues.
:::

### Configuring Staging and Production

Initialize your project again, then head over to the [firebase documentation](https://firebase.google.com/docs/hosting/multisites?authuser=0) and follow the instructions for setting up deploy targets for both sites.

The Firebase CLI commands for setting up your deploy targets should look like the following:

``` bash
firebase target:apply hosting prod project-name
firebase target:apply hosting stage project-name-stage
```

Your `.firebaserc` file should look like the following:

``` 
{
  "projects": {
    "default": "project-name"
  },
  "targets": {
    "project-name": {
      "hosting": {
        "prod": [
          "project-name"
        ],
        "stage": [
          "project-name-stage"
        ]
      }
    }
  }
}
```

And your `firebase.json` file should look like the following:

``` json
{
  "hosting": [
    {
      "target": "prod",
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    },
    {
      "target": "stage",
      "public": "dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    }
  ]
}
```
### Deploying Staging and Production

There are three scripts that you will need to know.

1. `firebase deploy` - This will deploy both the staging and development environments
2. `firebase deploy --only hosting:prod` - Deploy just to the production site
3. `firebase deploy --only hosting:stage` - Deploy just to the staging site
   - Append `-m "Deploy Message` for leaving a message 

::: tip
Add a npm script for each.<br />
Ex. `"stage": "firebase deploy --only hosting:stage"` and run `npm run stage` or `npm run stage -- -m "Deploy Message"`.
:::

## Connect Domain

If you want to deploy from soemthing other than `*.firebaseapp.com` or `*.web.app` you can connect to a specific domain. In the Hosting console in Firebase, click the button that says `Connect domain`.

1. Enter the domain
2. Verify ownership
   1. Go to the Domain DNS page, and enter the resource record types provided
3. Go live. This might take up to a day, but typically takes 20 minutes, more or less.

The DNS page might look something like this:

| Name | Type | TTL | Data                               |
| ---- | ---- | --- | ---------------------------------- |
| @    | A    | 1h  | 151.101.1.195 <br />151.101.65.195 |
| www  | A    | 1h  | 151.101.1.195 <br />151.101.65.195 |
| foo  | A    | 1h  | 151.101.1.195 <br />151.101.65.195 |

In this example, the `@` would be `bar.com`, `www` would be `www.bar.com`, and `foo` would be `foo.bar.com`.

## Redirects

`"type": 302` is a temporary redirect, where `"type": 301` is a permenant redirect. If you use a 301 redirect for a temporaty purpose, you may end up with seo issues.

```js
"redirects": [
    {
        "source": "/about",
        "destination": "/",
        "type": 301
    },
    {
        "source": "/contact",
        "destination": "/",
        "type": 302
    },
]
```
