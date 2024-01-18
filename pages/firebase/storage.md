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
  // Do not tack on a .then() here unless you do not want to use the uploadTask.on() function

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
    console.error(`There was an error uploading the file: ${error.message}`);
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


### Upload a File with Metadata

If you want to attach any metadata to the upload (like uid) you can attach it at the time you upload the file. In the `put` function pass in `{customMetadata: <object>}`, `<object>` being the object of custom metadata information you want to add. This can come in [handy with security rules](https://stackoverflow.com/questions/42653967/firebase-storage-custom-metadata-security-rule-for-list-of-uids).

```js
let uploadTask = firebase
  .storage()
  .ref(`images/upload.jpg`)
  .put(this.fileToUpload, {customMetadata: {'uploadedBy': "Nathan"}});
```

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
    console.error(`Error getting document: ${error.message}`);
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
    console.error(`The file didn't delete properly: ${error.message}`);
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
    alert(`Error getting the list: ${error.message}`);
  });
```

The reference is returned something like `gs://bucket/images/upload.jpg`. You can use this as a reference similar to using just `images/upload.jpg`. For example, `firebase.storage().refFromURL('gs://bucket/images/upload.jpg')`

## Resize Images Before Uploading

In it's simplest form, this will take an uploaded image, fit it into a 600x600 container, then save it to Firebase Storage. When saving as a dataURL, it will save the image as a .png file. so keep that in mind.

``` html
<form>
  <input type="file" accept="image/*" @change="resizeImageBeforeUpload" />
</form>
<canvas class="dev-border" id="canvas-container" style="display: none;">
  Your browser does not support the HTML5 canvas tag.</canvas
>
<img id="resized-image" />
```

``` js
addToFirestorage: function(data) {
  let uploadTask = this.$fireStorage
    .ref(`dataurl/upload.png`)
    .putString(data, 'data_url')
},
resizeImageBeforeUpload: function(e) {
  if (e.target.files[0]) {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = e1 => {
      // Prepare the image
      let image = new Image()
      image.src = e1.target.result
      image.onload = e2 => {
        // Prepare the canvas
        let canvas = document.getElementById('canvas-container')
        let ctx = canvas.getContext('2d')
        // Setup to constrain the image to fit into a 600x600 container
        let canvasContainer = 600
        let imageRatio = image.height / image.width
        // Draw the image
        if (imageRatio > 1) {
          // For portrait images
          canvas.width = canvasContainer / imageRatio
          canvas.height = canvasContainer
        } else {
          // For landscape and square images
          canvas.width = canvasContainer
          canvas.height = canvasContainer * imageRatio
        }
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        // Set the image tag to save to computer
        var canvasData = canvas.toDataURL()
        document.getElementById('resized-image').src = canvasData
        this.addToFirestorage(canvasData)
      }
    }
  }
}
```

A helpful article for resizing images using the canvas element was found on [Draw an image in canvas using Javascript by JavaScript Jeep](https://medium.com/front-end-weekly/draw-an-image-in-canvas-using-javascript-%EF%B8%8F-2f75b7232c63).
