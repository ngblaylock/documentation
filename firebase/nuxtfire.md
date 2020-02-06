# Nuxt-Fire

Nuxt-Fire is a plugin for Nuxt that easily sets up Firebase so you don't have to do a lot of the crazy setup. They have some easy setup on their [documentation](https://nuxtfire.netlify.com/), but here is the gist of it.

::: tip
When using Nuxt-Fire, it is best to use arrow functions. It handles `this` better.
:::

## Initialization

Before you can do any configuration or write any firebase code, you have to install firebase to your project as a dependency. Then you need to install Nuxt-Fire. Somewhere there some magic happens, and you can configure the webpage and everything just works. Thumbs up to Nuxt-Fire.

```bash
npm i firebase
npm i nuxt-fire
```

In `nuxt.config.js`, enter the following within `modules`:

```js
modules: [
    [
      'nuxt-fire',
      {
        config: {
            apiKey: '<apiKey>',
            authDomain: '<authDomain>',
            databaseURL: '<databaseURL>',
            projectId: '<projectId>',
            storageBucket: '<storageBucket>',
            messagingSenderId: '<messagingSenderId>',
            appId: '<appId>',
            measurementId: '<measurementId>' // MIGHT NOT HAVE THIS
        },
        services: {
            auth: true,
            firestore: true
        }
      }
    ]
  ],
```

## Authentication

Sign In with Email and Password:

```js
this.$fireAuth
  .signInWithEmailAndPassword(this.username, this.password)
  .then(() => {
    console.log("Login Successful");
  })
  .catch(error => {
    console.error(error);
  });
```

Sign Out will only occur when the user explicitly signs themself out. If you need the user to sign out automatially after the session expires, you will need to dig into the Firebase documentation.

```js
this.$fireAuth
  .signOut()
  .then(() => {
    console.log("Log Out Successful");
  })
  .catch(error => {
    console.log(error);
  });
```

## Firestore

Get data from the firestore using the onSnapshot. As of my experience, if you do it this way, you do not need to worry about Vuex because it will always keep in in sync. One downside to it may be that you get charged by how many reads you have. If it gets out of control, then maybe consider Vuex.

Another potential issue to be aware of is if two users are using the same application and one writes new data, it will suddenly populate their webpage without any warning. I noticed that KSL and Box use a method where they only display an alert letting the user know that there is an update, and they can refresh the page to see the changes.

```js
this.$fireStore
  .collection("people")
  .orderBy("age")
  .onSnapshot(
    snapshot => {
      this.files = [];
      snapshot.docs.forEach(doc => {
        let obj = doc.data();
        obj.id = doc.id;
        this.files.push(obj);
      });
    },
    err => {
      console.log(err.message);
    }
  );
```

Add to Firestore

```js
// ADD TO FIRESTORE
this.$fireStore
  .collection("people")
  .add({
    name: this.add.name,
    age: parseInt(this.add.age)
  })
  .then(() => {
    // CLEAR THE FORM
    this.add.name = "";
    this.add.age = "";
  })
  .catch(err => {
    console.error("Error writing document: ", error);
  });
```

Update Firestore:

```js
this.$fireStore
  .collection("people")
  .doc(id)
  .update({
    name: this.selectedUser.name,
    age: parseInt(this.selectedUser.age)
  })
  .then(() => {
    console.log("Document successfully updated!");
  })
  .catch(error => {
    console.error("Error updating document: ", error);
  });
```

Delete from Firestore:

```js
this.$fireStore
  .collection("people")
  .doc(id)
  .delete();
```
