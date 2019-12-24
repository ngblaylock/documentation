# Forms

## Google Forms

You can use Google Forms on your static web pages. 

```
TODO: Add in how Google Forms work on a static page
```

### Honeypot Spam Prevention

Using this Google Form method, you will most likely get a lot of spam bots injecting unwanted information. You can use the honeypot method to trick the spam bots to fill out information, where if filled, the form will not submit correctly. In short, create an dummy field that only spam bots can see. If it is filled out, then change the form action link. As a backup solution, you can add a simple math problem. To hide the fields from users, use the following CSS:

``` css
.honeyHide {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
```

If you are using Vue or Nuxt, then you should use a watcher:

``` js
watch: {
    // whenever the honeypot question is filled, run spamLock, which changes the
    // form submit link to some bogus link, then forces the math question to show up.
    spamLock: function() {
      this.formActionLink = "https://docs.google.com/forms/spamPrevent";
      this.solveRequired = true;
    },
    // whenever the honeypot is triggered and the simple math problem must be solved
    // then run the following function. If it is correct, then change the form
    // submit link to the original, and correct link.
    solveAnswer: function() {
      if (this.solveAnswer == 3) {
        this.formActionLink = "https://docs.google.com/forms/...";
      }
    }
  }
```