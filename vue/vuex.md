# Vuex
Vuex is used to manage the state. The big idea is that it will eliminate the need for `props` or `emit` to pass data from one componenet to another. It is not required or even necessary for small projects, but will be a huge help in large projects.

``` js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
});
```

## State
State is comparable to `data` in Vue. To access the state from a Vue componenet, access it through the `computed{}` property by using `this.$store.state.*`, with `*` being the object name you are retrieving.

## Getters
Getters are comparable to `computed{}` in Vue. These take the state and returns a modified version of it. To access the getters from a Vue componenet, access it through the `computed{}` property by using `this.$store.getters.*`, with `*` being the object name you are retrieving.

## Mutations
Mutations are comparable to Methods. However, do not run any asynchronous code here. That is what `actions{}` are for. To modify state with a mutation, use it through the `methods{}` property by useing `this.$store.commit('*')`

## Actions
Actions are comparable to `methods{}` in Vue. Actions is different than Mutations primarily that it is much better for asynchronous tasks. Modify mutations with actions by using it through the `methods{}` property and use  `this.$store.dispatch('*')`

## Resouces
- [Vuex Documentation](https://vuex.vuejs.org)
- [Net Ninja YouTube Playlist](https://youtu.be/BGAu__J4xoc)
- [Net Ninja GitHub Repo](https://github.com/iamshaunjp/vuex-playlist)
