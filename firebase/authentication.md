# Authentication

## Sign In

Before you can sign in anyone with an email and password, you need to make sure it is set up in the Firebase console.

### With Email and Password

```js
firebase
  .auth()
  .signInWithEmailAndPassword("email@example.com", "password")
  .then(() => {
    console.log("Sign In Successful");
  })
  .catch(error => {
    console.error(`There was an error: ${error}`);
  });
```

## Sign Out

Sign Out will only occur when the user explicitly signs themself out. If you need the user to sign out automatially after the session expires, you will need to dig into the Firebase documentation.

```js
firebase
  .auth()
  .signOut()
  .then(() => {
    console.log("Log Out Successful");
  })
  .catch(error => {
    console.error(`There was an error: ${error}`);
  });
```

## Auth State Changes

Use the auth state change to figure if there is currently a user logged in. You can access all the user information through the user object.

```js
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Do something with the user information
  } else {
    // Show that there is no user logged in
  }
});
```
