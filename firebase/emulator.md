# Emulator

The emulator allows you to make changes to local, temporary data. By default it is a blank slate every time you start up an emulator.

## Setup

I had a little trouble with the setup, but eventually figured it out. You need to have Java installed to run the emulator. For my Mac m2 I needed to install the [Arm 64 DMG Installer](https://www.oracle.com/java/technologies/downloads/#jdk17-mac). 

::: warning
If you run into the error `Error: It looks like you haven't used Cloud Firestore in this project before` follow the instructions at this [Stack Overflow thread](https://stackoverflow.com/a/74532000/7758781).
:::

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

### Copy production data to emulator

This script is heavily based off of [this article](https://medium.com/firebase-developers/how-to-import-production-data-from-cloud-firestore-to-the-local-emulator-e82ae1c6ed8).

It's a pain to start from scratch with given data. This is a way to get a copy of live data to the emulator that you can freely manipulate and it won't affect production.

This script uses **sandbox-ca45d** as the project ID (found in the app settings or `firebase projects:list`), and uses **test-data** for the directory  where the data goes.

Name this file `refreshdb.sh`, put it in the root of the project, and run `bash refreshdb.sh`.

```bash
set -e

# This was taken from this article: 
# https://medium.com/firebase-developers/how-to-import-production-data-from-cloud-firestore-to-the-local-emulator-e82ae1c6ed8

# 1. Make sure Python 3 and gsutil are installed
  # python3 -V
  # gsutil version

# 2. Make sure that billing is enabled (and set a limit of $2)
  # Note that this is just for alerts. It doesn't shut down the project if it goes over.
  # Firebase Console -> Spark Plan change to Blaze

# 3. Initial Setup. You should only need to do this once
  # firebase login
  # firebase projects:list
  # firebase use sandbox-ca45d
  # gcloud projects list
  # gcloud config set project sandbox-ca45d 

# 4. Optional, manual way to copy data
  # # 4.a Remove old data
  # rm -rf ./test-data
  # gsutil -m rm -rf gs://sandbox-ca45d.appspot.com/test-data

  # # 4.b Add new data
  # gcloud firestore export gs://sandbox-ca45d.appspot.com/test-data
  # gsutil -m cp -r gs://sandbox-ca45d.appspot.com/test-data .

# 5. Use this instead of 4

#Remove previous bucket if exists
delete_previous_version_if_exists() {
  #We either delete local folder and bucket object or just a bucket
  rm -rf ./test-data &&
  gsutil -m rm -rf gs://sandbox-ca45d.appspot.com/test-data ||
  gsutil -m rm -rf gs://sandbox-ca45d.appspot.com/test-data
}

export_production_firebase_to_emulator() {
  #Export production firebase to emulator bucket
  gcloud firestore export gs://sandbox-ca45d.appspot.com/test-data
  
  #Copy to local folder
  gsutil -m cp -r gs://sandbox-ca45d.appspot.com/test-data .
}

#Run bash functions, either delete previous bucket and local folder if exists for update or just export clean way
delete_previous_version_if_exists && export_production_firebase_to_emulator ||
export_production_firebase_to_emulator

firebase emulators:start --import=test-data --export-on-exit
```

For any subsequent sessions you can just run `firebase emulators:start --import=test-data --export-on-exit` which will preserve your data from production with whatever modifications you made. If you need to start with a mirror copy of production, you will need to run `bash refreshdb.sh` again.

::: warning
Every time you refresh data all of the authentication set up will disapear. **ALSO** I still need to test this script with cloud storage and functions and such. I have only tested this with Firestore.
:::
