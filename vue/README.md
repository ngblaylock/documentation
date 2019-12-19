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
