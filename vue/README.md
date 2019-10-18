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

