# Firestore

Before doing any work here, you will need to configure your app using the code from the [Firebase](/firebase/) page.

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

One cool thing you can do is add a timestamp to your item. This will be whatever is set on the server, not on the client. [Fireship](https://fireship.io/snippets/firestore-increment-document-id-value/) shows this.

```js
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

firebase
  .firestore()
  .collection("collectionName")
  .add({
    name: "Bobby Joe",
    city: "Bobby's World",
    createdAt: timestamp(),
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

You can query data by certain conditions such as using `where` combined with `==`, `>`, `<`, etc. or doing an `orderby` function. Then Firebase will only return documents given those considtions. You **cannot** search by case insensitive.

You can run a query by what a string starts with using the following (fount on [this](https://stackoverflow.com/questions/46568142/google-firestore-query-on-substring-of-a-property-value-text-search) thread:

```js
let res = await firebase
  .firestore()
  .collection("people")
  .where("first", ">=", "Za")
  .where("first", "<=", "Za" + "\uf8ff")
  .get();
console.log(res.docs.map((doc) => doc.data()));
```

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
