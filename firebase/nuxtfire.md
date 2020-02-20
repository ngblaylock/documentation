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
        apiKey: '...',
        authDomain: '...',
        databaseURL: '...',
        projectId: '...',
        storageBucket: '...',
        messagingSenderId: '...',
        appId: '...',
        measurementId: '...' // Might not have this
      },
      services: {
        auth: true,
        firestore: true,
        storage: true
      }
    }
  ]
]
```

## Naming

When using Nuxt-Fire, you will not need to import any firebase scripts since it is now a global script. Instead of using the conventional JavaScript naming, use the firebase nameing convention.

| Javascript           | Nuxt-Fire          |
| -------------------- | ------------------ |
| firebase.auth()      | this.\$fireAuth    |
| firebase.firestore() | this.\$fireStore   |
| firebase.storage()   | this.\$fireStorage |



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
