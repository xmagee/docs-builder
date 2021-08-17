# docs-builder

A tool to convert entire repo of markdown docs info pdf's, in one command.  

`build.js` looks for markdown (`.md`) files in the `docs/` folder, place any docs in there (without spaces in the filenames!), and they will be built into PDFs. 

## build docs
* `$ git clone https://github.com/xmagee/docs-builder`, or replace with your forked url
* `$ cd docs-builder`
* `$ npm i`
* `$ npm run build`
* docs will be deposited in the `build/` directory when complete, in pdf format.
