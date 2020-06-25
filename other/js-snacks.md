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

Email: `/[\w\.\-]+@(\w+(\.\w+){1,})/g`

Slugify: from [Matthias Hagemann](https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1)

```js
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
