# JS Snacks

These are just some helpful snippets I found and compiled.

## Array Functions

```js
let items = [
  { name: "boat", price: 200 },
  { name: "car", price: 150 },
  { name: "plane", price: 1200 },
  { name: "motorcycle", price: 50 },
  { name: "tractor", price: 100 },
];

items.forEach((item) => {
  console.log(item.name);
  // do not return anything
  // simply do something
});

const filteredItems = items.filter((item) => {
  return item.price <= 100;
  // return a true or false statement
  // if returns true, it is added to the new array
  // else does not add to the new array
});

const reducedItems = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
  // returns a single value
  // takes the current total, then the array
  // also takes a callback which is the starting number
}, 0);

const mapItems = items.map((item) => {
  return item.price * 2;
  // returns a new array
});

const findItem = items.find((item) => {
  return item.name == "tractor";
  // will return the first item found that passes
});

const someItem = items.some((item) => {
  return item.name == "car";
  // true, at least one item name is car
  // returns a true or false statement
});

const everyItem = items.every((item) => {
  return item.name == "car";
  // false, not every item name is car
  // returns a true or false statement
});
```

## Regular Expressions

### Email 

``` js
/[\w\.\-]+@(\w+(\.\w+){1,})/g
```

### Slugify


```js
// By Matthias Hagemann, https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1)
slugify: function(string) {
  const a =
  'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
  'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[^\w\-]+/g, '') // Remove all non-word characters
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, '') // Trim - from end of text
},
```

### Vanilla JS Slide

Vanilla JS and CSS don't handle expanding up and down when there is an auto height. I found this script online that works really well as a replacement to jQuery's `slideIn()`, `slideOut()`, `slideToggle()` functions. This example is set up for a node environment. 

``` js
// slide.js
// Specify Element to transition and Duration (milliseconds)
// slide.up(document.getElementById("target"), 1000);
// slide.down(document.getElementById("target"), 1000);
// slide.toggle(document.getElementById("target"), 1000);

/* SLIDE UP */
let up = (target, duration=200) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
  }, duration);
}

/* SLIDE DOWN */
let down = (target, duration=200) => {

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout( () => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

/* TOGGLE */
var toggle = (target, duration = 200) => {
  if (window.getComputedStyle(target).display === 'none') {
    return down(target, duration);
  } else {
    return up(target, duration);
  }
}

module.exports = {up, down, toggle}
```

### Get URL Parameter

``` js
//  https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Returns the parameter for a given URL
console.log(
  getParameterByName(
    "isCool",
    "https://nathanblaylock.com/?isCool=Super%20Cool"
  )
);

// Returns the parameter for the current window
console.log(getParameterByName("isCool"));
```

### To Dollar Amount:

``` js
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function toDollar(value) {
  return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

console.log(toDollar(1234567.896))   // $1,234,567.90
console.log(toDollar('1234567.896'))   // $1,234,567.90
```

## Check Browser for Internet Explorer

If you are developing an app that doesn't work or work well with Internet Explorer, you can use this to check for that and do something if it does. This specific script will also detect if using Microsoft Edge, so if you don't need that then you can comment it out. I found this on [Stack Overflow](https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie ).

```js
function detectIEEdge() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    // Edge => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  // other browser
  return false;
}

if(detectIEEdge()){
  // Alert if the browser is IE or Edge
  alert("Please don't use edge or Internet Explorer")
}
```

## Node Batch Rename Files

This specific script is good for taking a bunch of Word document files named by date, and copying them to a different folder with a easy to use naming convention. For example, `January 5 2020.docx` to `2020-01-05.docx`. Then when sorting the files it will be by the date rather than the name, which wouldn't put them in any specific order. 

This script could really use some touching up, but this was just a quick and dirty way that I put together to do a specific group of files. It would be best to test this out with a few files to make sure you don't get something that you really don't want. 

1. Create a new folder and `cd` into it.
2. Do a `npm init -y` to start a new node project with the defaults. 
3. Install Moment.js with `npm i moment`
4. Create a new folder in the root directory called `converted`
5. In the root directory, move all the files you want to convert. Double check that they are in some readable date-like format that Moment.js can understand.
6. Create a file called `index.js` and put in the following:

``` js
const moment = require("moment");
const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file.endsWith(".docx")) {
    const fileName = path.basename(file, ".docx");
    const newName = moment(fileName).format("YYYY-MM-DD");
    console.log(newName);

    fs.copyFile(file, `converted/${newName}.docx`, (err) => {
      if (err) throw err;
      console.log(`${fileName} Has been converted to ${newName}`);
    });
  }
}
```