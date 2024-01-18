# Visual Studio Code

## VS Code Extensions

| Name                   | Author              |
| ---------------------- | ------------------- |
| Alphabetical Sorter    | Ugur Erdal          |
| Auto Rename Tag        | Jun Han             |
| Autoprefixer           | mrminc              |
| Git History            | Don Jayamanne       |
| Highlight Matching Tag | vincaslt            |
| html-entities          | christopherstyles   |
| Liquid                 | Νίκος               |
| Live Sass Compiler     | Ritwick Dey         |
| Live Server            | Ritwick Dey         |
| Markdown All in One    | Yu Zhang            |
| Material Icon Theme    | Philipp Kief        |
| Material Theme         | Mattia Astorino     |
| Prettier               | Prettier            |
| Project Manager        | Alessandro Fragnani |
| Vetur                  | Pine Wu             |
| vscode-pdf             | tomoki1207          |
| XML Tools              | Josh Johnson        |

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
  "editor.wordWrap": "wordWrapColumn",
  "emmet.includeLanguages": { "liquid": "html" }
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
