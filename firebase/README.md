# Firebase

## Install Firebase Tools

You should only need to install firebase tools if you are going to either be using hosting or cloud functions. Otherwise, you shouldn't really need to install this. The script below installs it globally, so it is a one time thing per computer.

```
sudo npm install -g firebase-tools
```

## Standard HTML Setup

Start out by getting the project set up. Some things that you are going to need are the SDK. Put this in order, before any custom scripts that you write.

```html
<!-- This core script is always required and must go first-->
<script src="https://www.gstatic.com/firebasejs/7.9.0/firebase-app.js"></script>

<!-- These are required to use each specific service -->
<script src="https://www.gstatic.com/firebasejs/7.9.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.9.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.9.0/firebase-storage.js"></script>

<!-- This is the config data that is provided in the console -->
<script>
  var firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
<script src="app.js"></script>
```

Once that is set up, you can go into `app.js` and add the following code to get any documents in your first collection.

## Nuxt-Fire

Nuxt-Fire is a plugin for Nuxt that easily sets up Firebase so you don't have to do a lot of the crazy setup. They have some easy setup on their [documentation](https://nuxtfire.netlify.com/), but here is the gist of it.

::: tip
When using Nuxt-Fire, it is best to use arrow functions. It handles `this` better.
:::

### Initialization

Before you can do any configuration or write any firebase code, you have to install firebase to your project as a dependency. Then you need to install Nuxt-Fire. Somewhere there some magic happens, and you can configure the webpage and everything just works. Thumbs up to Nuxt-Fire.

```bash
npm i firebase
npm i nuxt-fire
```

In `nuxt.config.js`, enter the following within `modules`:

```js
modules: [
  [
    "nuxt-fire",
    {
      config: {
        apiKey: "...",
        authDomain: "...",
        databaseURL: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "...",
        measurementId: "..." // Might not have this
      },
      services: {
        auth: true,
        firestore: true,
        storage: true
      }
    }
  ]
];
```

::: warning
If you are going to use `onSnapshot` with Firestore, you MUST use it in the `mounted` hook. If you don't, you may get an error saying `The command 'nuxt generate' finished but did not exit after 5s`.
:::

## Naming

When using Nuxt-Fire, you will not need to import any firebase scripts since it is now a global script. Instead of using the conventional JavaScript naming, use the Nuxt-Fire nameing described below.

| Javascript           | Nuxt-Fire          | Common Variable Name |
| -------------------- | ------------------ | -------------------- |
| firebase.auth()      | this.\$fireAuth    | fireAuth             |
| firebase.firestore() | this.\$fireStore   | fireDB               |
| firebase.storage()   | this.\$fireStorage | fireStorage          |
