# Emulator

The emulator allows you to make changes to local, temporary data. By default it is a blank slate every time you start up an emulator.

## Setup

I had a little trouble with the setup, but eventually figured it out. You need to have Java installed to run the emulator. For my Mac m2 I needed to install the [Arm 64 DMG Installer](https://www.oracle.com/java/technologies/downloads/#jdk17-mac). 

## Connect to the Emulator

```js
// switch this to true to use the production data.
let production = false;

const firebaseConfig = {
  apiKey: ...,
  authDomain: ...,
  projectId: ...,
  storageBucket: ...,
  messagingSenderId: ...,
  appId: ...,
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
console.log(firebase.auth);

if (!production) {
  db.useEmulator("localhost", 8080);
  auth.useEmulator("http://localhost:9099");
}
```

I learned that using the auth pre-built UI doesn't connect to the emulator. But I don't think I would use that in a real site anyway.

## Start the Emulator with Data

You can start the emulator with the previous data you had by running a specific command. This is not from the cloud, but whatever you are locally testing. 

```bash
firebase emulators:start --import=test-data --export-on-exit
```

It doesn't look like the `test-data` directory needs to exist to import. It will be the name of the directory for the exported data.
