# Piperplate

This is a boilerplate for JavaScript projects, writting by me. Since it is annoying having to write this more than once, will do it just once ? aha.
It uses:
-  Express for server side rendering
-  SASS
-  Vanilla JS
-  Webpack
-  Pugjs as a template engine for fast creation of html
-  Prismic.io for the Headless CMS

## Structure

`shared` folder is for the assets (images, fonts, icons,etc) and webpack will copy then to public automatically.

`app` is where the heart of the app is, the entry point for webpack, the stars of the sky, the light of the dark, the peanut butter of the bread (or just the main).

`styles` that is pretty self explanatory, won't say anything more than it contains sass files and all its folders.

`public` is the public folder for production.

`views` is for the engine template pug, your pages, partials, etc
