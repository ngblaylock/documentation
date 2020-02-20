# Firestore

## Initialize

Start out by getting the project set up. Some things that you are going to need are the SDK. Put this in order, before any custom scripts that you write.

```html
<!-- This is always required and must go first-->
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>

<!-- This is required to use Firestore -->
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>

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

## Read Data

This will read the data once. It does not automatically update like the realtime listener.

```js
firebase
  .firestore()
  .collection("collectionName")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
    });
  })
  .catch(err => {
    console.log(err.message);
  });
```

### Realtime Listener

Instead of using the `.get().then()` method, you can use `.onShapshot()` which will listen for changes in the database and update it automatically so you do not need to refresh the page. With an error message, it would look like the following:

```js
firebase
  .firestore()
  .collection("collectionName")
  .onSnapshot(
    snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
    },
    err => {
      console.log(err.message);
    }
  );
```

## Write Data

When you are writing data, be sure to always give a reference with the unique id for each. Try storing it in a `data-id` attribute or something like that.

```js
firebase
  .firestore()
  .collection("collectionName")
  .add({
    name: "Bobby Joe",
    city: "Bobby's World"
  });
```

## Delete Data

You will probably need to add an event listener to each spot you want to delete.

```js
firebase
  .firestore()
  .collection("collectionName")
  .doc("docName")
  .delete();
```

## Querying Data

You can query data by certain conditions such as using `where` combined with `==`, `>`, `<`, etc. or doing an `orderby` function. Then Firebase will only return documents given those considtions.

## Update and Set

You can reset information in the document. This will override everything in the document.

```js
firebase
  .firestore()
  .collection("collectionName")
  .doc("docName")
  .set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
```

Or you can update a single part. It replaces the key that is being updates, but will not erase what is not mentioned.

```js
firebase
  .firestore()
  .collection("collectionName")
  .doc("docName")
  .update({
    name: "Sydney"
  });
```
