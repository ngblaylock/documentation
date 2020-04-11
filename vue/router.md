# Router

I use Nuxt, so I don't do a lot of configuration when it comes to Vue Router. But there are some functions that I use that might be helpful to copy and paste down the road. (Use `$router` without `this` when using in the template html)

- `this.$router.go(-1)` will take you back to the previous route page that you were on
- `this.$router.push('/')` will take you to the root route
- `this.$router.params.name` will give you the name of the page/route you are in
- `this.$router.query.id` will give you the query value in the URL. Ex. returns `foo` for `domain.com/pages?id=foo`

## Watch Route Change

It is helpful sometimes to watch whenever a route changes. Route changes does not reload a webpage, so if you want an action to run, or something to update whenever a route changes, use the following code:

``` js
watch: {
  $route(to, from) {
    // do something when you switch from one page to another
  }
}
```

Or you can watch a change in the route query by using the following:

``` js
watch: {
  '$route.query.id': function(id) {
    // do something when the ?id=* changes in the URL
  }
}
```