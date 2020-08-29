# 11ty Config

Here is a pretty basic configuration file that I like to use. Basically, it outputs the build in the docs folder (for GitHub Pages) and it will include the build from the styles, images, and js directories that you need to include. Also, if you have a CNAME, which you probably will have, it will include that as well. 


``` js
// .eleventy.js (in the project root)

module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('CNAME');

  // Returning something from the configuration function is optional
  return {
    dir: {
      output: 'docs'
    }
  };
};
```