# Vuepress

## Install Vuepress

You only need to do this once per computer.

```
sudo npm install -g vuepress
```

## Using HTML in Vuepress

``` html
<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>
```

produces:

<p style="color: blue;">This is a paragraph with a <span style='color: green;'>span</span> tag.</p>


## Run in Development Mode

```
sudo vuepress dev
```

## Build for Production

```
sudo vuepress build
```

## Build to the docs folder for easy GitHub Deployment

Add the following to the `.vuepress/config.js` file.

``` js
dest: 'docs',
```

The default is dest: `dest: '.vuepress/dist'`.

## Folder Permissions

So, aparently, the default behavior of the `docs` folder produced in the build only gives you read access. Normally, this would be fine, but if you are working on it with multiple computers, pushing and pulling from GitHub will throw an error saying that there are not sufficient permissions. To fix this, you need to right click the `docs` folder and select `Get Info`. Then add your username (on the computer) and set your permissions to `Read-Write`.

## Last Updated

The Last Updated field is automatically generated when there is a Git commit. The best way to make sure this works is to commit your work before building your Vuepress file.