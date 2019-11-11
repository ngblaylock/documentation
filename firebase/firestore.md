# Firestore

## Initialize

Start out by getting the project set up. Some things that you are going to need are the SDK. Put this in order, before any custom scripts that you write.

``` html
<!-- THE CORE FIREBASE JS SDK IS ALWAYS REQUIRED AND MUST BE LISTED FIRST -->
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>

<!-- THIS IS THE CODE TO RUN FIRESTORE -->
<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>

<!-- THIS IS THE CONFIGURATION FILE THAT FIREBASE GIVES YOU WHEN YOU SET UP YOUR PROJECT IN THE BROWSER -->
<!-- PAY ATTENTION TO THE SECOND LINE FROM THE TOP. THAT LINE, YOU WILL NEED TO ADD -->
<script>
    // Your web app's Firebase configuration
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
    
    // YOU WILL NEED TO ADD THIS LINE YOURSELF
    const db = firebase.firestore();
</script>
<script src="app.js"></script>
```

Once that is set up, you can go into `app.js` and add the following code to get any documents in your first collection.

## Read Data

``` js
db.collection('collectionName').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
}).catch(err => {
    console.log(err.message);
});
```

### Realtime Listener

Instead of using the `.get().then()` method, you can use `.onShapshot()` which will listen for changes in the database and update it automatically so you do not need to refresh the page. With an error message, it would look like the following:

``` js
db.collection('collectionName').onSnapshot(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
}, err => {
    console.log(err.message);
});
```

## Write Data

When you are writing data, be sure to always give a reference with the unique id for each. Try storing it in a `data-id` attribute or something like that.

``` js
db.collection('collectionName').add({
    name: "Bobby Joe",
    city: "Bobby's World"
});

```

## Delete Data

You will probably need to add an event listener to each spot you want to delete.

``` js
db.collection('collectionName').doc("docName").delete(); 
```

## Querying Data

You can query data by certain conditions such as using `where` combined with `==`, `>`, `<`, etc. or doing an `orderby` function. Then Firebase will only return documents given those considtions.

## Update and Set

You can reset information in the document. This will override everything in the document.

``` js
db.collection("collectionName").doc("docName").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});
```

Or you can update a single part. It replaces the key that is being updates, but will not erase what is not mentioned.

``` js
db.collection("collectionName").doc("docName").update({
    name: "Sydney"
});
```

## TODO: Firebase Security Rules