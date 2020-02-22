# Security Rules

Security Rules is what makes Firebase truly secure. Only the project owner can log in and change these. They are also tricky because they are not written in JavaScript, so this page will be more of a code snippet resource to use

## Expire on Date (default)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone on the internet to view, edit, and delete
    // all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // your app will lose access to your Firestore database
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 2, 22);
    }
  }
}
```

## Allow Read Write

This is a dangerous one, but this will allow anyone to read or write regardless of whether they are logged in or not.

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write
    }
  }
}
```

### Allow Read Only

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read
    }
  }
}
```

## Authenticated Users

You can use the `request.auth.uid` to get the currently authenticated user. This example only cares that the user is anyone logged in, and gives them permission to read and write anything.

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```