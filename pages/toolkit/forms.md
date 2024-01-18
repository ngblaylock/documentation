# Forms

## Google Forms

Using Google Forms in your static site has some advantages and disadvantages. Advantages include the ease of setup and control, integrate responses with a Google spreadsheet, and you can easily create email notifications with a [plugin](https://workspace.google.com/u/0/marketplace/app/email_notifications_for_google_forms/984866591130?hl=en&pann=forms_addon_widget). The biggest disadvantage is the style of the embed rarely will match your site. 

I stumbled upon a really neat article by [WebJeda](https://blog.webjeda.com/google-form-customize/) who goes over how to customize a form, and really, it is super simple. The example is a little old since the input names that you need will be in a different spot, but by looking over the code a bit better, you will eventually find the right name you need. In my form, the inputs had a name similar to `name="entry.450328905"`. Make sure that the form action is set to the right URL as well. If you want to set up your own custom confirmation page, follow the steps for the iFrame. As a heads up, the user will get a error in the console, but it doesn't stop the form from submitting.

## Honeypot Spam Prevention

Using this Google Form method, you will most likely get a lot of spam bots injecting unwanted information. You can use the honeypot method to trick the spam bots to fill out information, where if filled, the form will not submit. In short, create an dummy field that only spam bots can see. If it is filled out, then do not submit the form.

```html
<div class="honey-hide">
  <label for="honey">Do not fill this out</label>
  <input id="honey" tabindex="-1" />
</div>
```

```css
.honey-hide {
  position: absolute;
  width: 0px;
  height: 0px;
  overflow: hidden;
  top: -1000px;
  left: -1000px;
}
```

```js
// jQuery
$("form").submit(function() {
  if ($("input#honey").val().length != 0) {
    return false;
  }
});
```

Credit for the script goes to [Thryv](https://www.thryv.com/blog/honeypot-technique/).

## Other Form Services

- [Cognito Forms](https://www.cognitoforms.com/) - You can use the Chameleon styles to help you style it to fit your site. This also has built-in spam protection so you don't have to worry about a honeypot.
- [Formspree](https://formspree.io/)
- [JotForm](https://www.jotform.com/)