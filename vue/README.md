# Vue

## CDN with HTML File

Use this boilerplate for your standard HTML page. It works well when you need to display data from a simple JSON file without using routes.

``` html
<div id="app">
  {{ message }}
</div>

<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
    var app = new Vue({
      el: '#app',
      data: {
          message: 'Hello Vue!'
      },
      computed: {
        reversedMessageComputed: function () {
          // this should always return something
        }
      },
      methods: {
        reverseMessageMethod: function () {
          // no need to return anything
        }
      },
      watch: {
        dataName: function() {
          // dataName is the key in the data object that is watching for a change
        }
      }
    })
</script>
```

Use the following if you are ready for production

``` html
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## *.vue Page Templates

The template for the `.vue` files are written slightly differently.

``` vue
<template>
  <div id="app">
    <Navbar />
    <!-- You must use a parent element within the template element -->
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      message: 'Hello World'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
```

## Basic Commands

- `v-bind:class="something"` (`:class="something"`)
- `v-on:click="someting"` (`@click="something"`)
- `v-model="something"`
- `v-if="something"`, `v-else-if="something"`, `v-else="something"`
- `v-for="thing in things" :key="thing.id"`, `v-for="(thing, index) in things" :key="index"`
- For more details, see the [Vue.js Essentials Cheat Sheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf) by Vue Mastery.

## Props and Emits

A note about props and emits, they only work if passing data to a **componenet**. It will not work if you are trying to send the prop to another page. Here is an example of how you would use a prop:

``` vue
<template>
  <div class="container">
    <h1>Nuxt Sandbox</h1>
    <UserProp :user="individual">Passing a prop</UserProp>
  </div>
</template>

<script>
import UserProp from '@/components/UserProp'

export default {
  components: {
    UserProp
  },
  data() {
    return {
      individual: {
        name: 'Brian',
        username: 'beaker',
        email: 'brian@mail.com',
        img: 'https://i.pravatar.cc/300'
      }
    }
  }
}
</script>
```

``` js
// UserProp component
export default {
    props: ['user']
}
```

## Axios with Vue
Axios is a library that handles asynchronous requests. This is much more backwards compatable than using `fetch()`, but it does require loading it through either NPM or as a CDN. For a full example on how to use Axios with Vue, check out the [Vue Cookbook](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html).

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
```

Axios should be loaded in the `created()` lifecycle hook. Use the following code to get started with Axios and Vue:

``` html
<script>
  new Vue({
    el: '#app',
    data() {
      return {
        users: null,
        loading: true
      }
    },
    created() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => this.loading = false)
    }
  })
</script>
```

Using Axios with a `.vue` file looks essentially the same, however you need to import Axios to the page. Use the following code:

``` js
import axios from 'axios';
```