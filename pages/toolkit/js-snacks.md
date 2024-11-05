# JS Snacks

These are just some helpful snippets I found.

## Regular Expressions

### Email 

``` js
/[\w\.\-]+@(\w+(\.\w+){1,})/g
```

## Functions

### Random UID

```js
let uid = 'u' + Math.random().toString(26).slice(2); // -> 'ue1cc564p2ec'
// or
let uuid = 'u' + crypto.randomUUID(); // -> 'u27842a10-c0d1-444f-91b4-a142f0f07f24'
```

### Slugify

::: Actually...
Just use the [slugify](https://www.npmjs.com/package/slugify) package from NPM.
:::

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

::: Actually...
Just use the [slide-element](https://www.npmjs.com/package/slide-element) package from NPM.
:::

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

## Get URL Parameter

::: Actually...
Just use the [query-string](https://www.npmjs.com/package/query-string) package from NPM.
:::

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

### Number to Currency (Dollars):

``` js
// modified from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
const formatCurrency = (value, decimal = false) => {
  if (!value || isNaN(value)) {
    console.error("Cannot format value:", value)
    return '';
  }
  value = parseFloat(value);
  if (decimal) {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return '$' + value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
};

console.log(formatCurrency(1234567.896, true))     // '$1,234,567.90'
console.log(formatCurrency('1234567.896', true))   // '$1,234,567.90'
console.log(formatCurrency(1234567.896))           // '$1,234,568'
console.log(formatCurrency('1234567.896'))         // '$1,234,568'
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

## Node Version Manager (NVM)

NVM is the only way I have really been able to get node working on my Linux machine. If you need a refresher on how to use NVM or to uninstall/install it, there is a great [blog article on Linode](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/).
