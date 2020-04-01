# Visual Studio Code

## Extensions

- Auto Rename Tag
- Auto Prefixer
- Live Sass Compiler
- Live Server
- Markdown All in One
- Material Icon Theme
- Material Theme
- Prettier
- Project Templates
- Vetur

## Themes

-Material Theme High Contrast

## Emmit Options

To add a keyboard shortcut for Emmet - Wrap with Abbreviation:

```json
// in keybindings.json
{
    "key": "ctrl+shift+enter",
    "command": "editor.emmet.action.wrapWithAbbreviation",
    "when": "editorTextFocus && !editorReadonly"
}
```

## Live Sass Compile

When setting up the Sass file, you may want to configure the defaults so the file is minified, includes a different extension name, or save to a different location. There are a lot of options you can find on the [documentation](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md). The hard part is where to save the preferences.

For the correct location, go to `Preferences > Settings > Extensions > Live Sass Compile Config > Edit in settings.json`. When in the json file, include any code from the documentation just before the closing `}`.

Use the following to keep everything organized. The file structure will be the following:

```
-| styles/
---| scss/
-----| custom.scss
---| custom.css
---| custom.min.css
```

```json
"liveSassCompile.settings.formats":[
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "~/../"
    },
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "~/../"
    }
],
```
