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
| foo  | A    | 1h  | 151.101.1.195 <br />151.101.65.195 |

In this example, the `@` would be `bar.com`, and `foo` would be `foo.bar.com`.

## Redirects

`"type": 302` is a temporary redirect, where `"type": 301` is a permenant redirect. Probably default to `302`, but it may have some SEO issues.

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
