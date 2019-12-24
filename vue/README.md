# Vue

Use this boilerplate for your standard HTML page. It works well when you need to template a few things.

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
          return this.message.split('').reverse().join('')
        }
      },
      methods: {
        reverseMessageMethod: function () {
          this.message = this.message.split('').reverse().join('')
        }
      },
      watch: {
        // whenever question changes, this function will run
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

## Basic Commands

- `v-bind:class="something"` (`:class="something"`)
- `v-on:click="someting"` (`@click="something"`)
- `v-model="something"`
- `v-if="something"`, `v-else-if="something"`, `v-else="something"`
- `v-for="thing in things" v-bind:key="thing.id"`, `v-for="(thing, index) in things"`
- For more details, see the [Vue.js Essentials Cheat Sheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf) by Vue Mastery.

## Axios with Vue
Axios is a library that handles asynchronous requests. This is much more backwards compatable than using `fetch()`, but it does require loading it through either NPM or as a CDN. For a full example on how to use Axios with Vue, check out the [Vue Cookbook](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html).

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
```

Axios should be loaded in the `mounted()` lifecycle hook. Use the following code to get started with Axios and Vue:

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
    mounted() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false)
    }
  })
</script>
```