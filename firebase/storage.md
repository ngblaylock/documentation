# Storage

## Upload a file

First thing first, you need to create a form that has a `<input type="file">` input. Instead of working with the file when the form is submitted, you may need to watch for a change on the input. The following is an example using Vue.js to store the uploaded file in `this.fileToUpload`. The HTML element should be `<input type="file" @change="processFile">`. If you are using basic javascript, it should be essentially the same code, but will require adding an event listener to get the file upload change and/or form submit.

```js
processFile(event) {
  this.fileToUpload = event.target.files[0]
},
```

Once you have the reference to the file uploaded, you can run the following either directly after the change event, or on submitting the form

```js
// In Firebase, the document will be named `upload.jpg`, but this can be customized to be whatever you want.
// Todo: get the file to be uploaded and change out the <fileToUpload>
let uploadTask = firebase
  .storage()
  .ref(`images/upload.jpg`)
  .put(this.fileToUpload);

// Use to return a progress indicator, and to return a URL for the uploaded image
uploadTask.on(
  "state_changed",
  snapshot => {
    let progress = parseInt(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    // Do something with the progress variable
  },
  error => {
    console.error(`There was an error uploading the file: ${error}`);
  },
  () => {
    // Do something after the file has been uploaded
    // This would be a good place to download a file URL and store it somewhere
  }
);
```

::: warning
If you upload a file to the same file path using the same name, the new image will replace the old image. It may be wise to consider checking if that file path already exists before sending the file to the storage bucket and asking the user if they want to replace the image. The action can not be undone.
:::

It is best to store the upload reference AND the upload URL in firestore. That way, you can easily refer to it for reading, updating, and deleting.

## Download a File URL

```js
firebase
  .storage()
  .ref("images/upload.jpg")
  .getDownloadURL()
  .then(url => {
    // Do something with the url variable
  })
  .catch(error => {
    console.error(`Error getting document: ${error}`);
  });
```

## Deleting a File

```js
firebase
  .storage()
  .ref("images/upload.jpg")
  .delete()
  .then(() => {
    // Do something after the file has been deleted
  })
  .catch(error => {
    console.error(`The file didn't delete properly: ${error}`);
  });
```

## List Files

You can list all the files and folders and it will return a reference to the file. 

```js
firebase
  .storage()
  .ref("images")
  .listAll()
  .then(res => {
    res.prefixes.forEach(folderRef => {
      console.log(`Folder Ref: ${folderRef}`);
    });
    res.items.forEach(itemRef => {
      console.log(`Item Ref: ${itemRef}`);
    });
  })
  .catch(error => {
    alert(`Error getting the list: ${error}`);
  });
```

The reference is returned something like `gs://bucket/images/upload.jpg`. You can use this as a reference similar to using just `images/upload.jpg`. For example, `firebase.storage().refFromURL('gs://bucket/images/upload.jpg')`