# Visual Studio Code

## Extensions

- Alphabetical Sorter
- Auto Rename Tag
- Autoprefixer
- Highlight Matching Tag
- Live Sass Compiler
- Live Server
- Markdown All in One
- Material Icon Theme
- Material Theme
- Prettier
- Vetur
- Vue Peek

## Settings

```json
// Preferences: Open Settings
{
  "liveSassCompile.settings.formats": [
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
  "editor.tabSize": 2,
  "workbench.iconTheme": "material-icon-theme",
  "editor.wordWrap": "wordWrapColumn"
}
```

## Keyboard Shortcuts

```json
// Preferences: Open Keyboard Shortcuts (JSON)
{
  "key": "ctrl+shift+enter",
  "command": "editor.emmet.action.wrapWithAbbreviation",
  "when": "editorTextFocus && !editorReadonly"
}
```
