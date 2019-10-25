# Hosting

Before anything else, you need to make sure that you go to the firebase console and start a new project.

Make sure that you have the firebase command line tools installed.

```
sudo npm install -g firebase-tools
```

## Log in to Firebase.

```
firebase login
```

This will open up a webpage where you select your account and log in. Select `Allow` to give Firebase the propper permissions. Once authenticated, you can go back to the code editor.

## Initiate your Project

`cd` into your root directory in the terminal, and type in the following command:

```
firebase init
```

This CLI will ask multiple questions. Follow the instructions there depending on what end result you are hoping for.

## Run in Development Mode

This is necessary to run instead of the Live Server plugin because this will use the directory selected in your project as the root. Live server will use the workspace folder as the root, and mess up some links.

```
firebase serve
```

## Deploy

This is super easy. Just run the following command and away you go. The command line will give you a link

```
firebase deploy
```

## Connect Domain

If you want to deploy from soemthing other than `*.firebaseapp.com` or `*.web.app` you can connect to a specific domain. In the Hosting console in Firebase, click the button that says `Connect domain`.

1. Enter the domain
2. Verify ownership
   1. Go to the Domain DNS page, and enter the resource record types provided
3. Go live. This might take up to a day, but typically takes 20 minutes, more or less.

## Redirects

`"type": 302` is a temporary redirect, where `"type": 301` is a permenant redirect. Probably default to `302`, but it may have some SEO issues.

``` js
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