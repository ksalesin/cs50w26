# CS 50: Software Design and Implementation (Winter 2026)

This is the website for CS 50: Software Design and Implementation (Winter 2026).

You will need Node.js installed. You can verify whether it is installed by running `node -v` and `npm -v` in your terminal. 

Once installed, in this directory run:

```
npm install
```

which should install all dependencies in the package.json file.

To generate html files from the markdown, run:

```
npx @11ty/eleventy --serve
```

The files are written into the `_site` directory. You can open the link it provides to preview the site (often `localhost:8080`).

To make changes, modify the markdown files in the root directory and then run the static site generator. Do not ever modify files in the `_site` directory.