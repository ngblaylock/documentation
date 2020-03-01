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

### With Google

Signing in with Google is easy, and only requires that the user has a Google account. This script works for both signing up and signing in through Google. Because of this, it would be unwise to use Google authentication for apps that have a more "By Invite Only" setting. Hiding the link would cause issues with intended users to sign in, and displaying the link would allow anyone to sign in.

Make sure that you enable Google authentication in the Firebase Console.

```js
var provider = new firebase.auth.GoogleAuthProvider();
firebase
  .auth()
  .signInWithPopup(provider)
  .then(result => {
    var user = result.user;
    console.log(`Successfully registered a user through Google: ${user.displayName}`);
  })
  .catch(error => {
    console.error(
      `There was an error registereing a user through Google: ${error.code}`
    );
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
