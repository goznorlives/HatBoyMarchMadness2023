# Excalibur TypeScript & Webpack Starter

This is a barebones [Excalibur](https://excaliburjs.com) game engine starter built using Typescript 4 & Webpack 5. It's a great starting place to jumpstart building your game! This repo is a template and can be used to [create your own repository](https://github.com/excaliburjs/template-ts-webpack/generate) in GitHub.

Check out our [other samples](https://excaliburjs.com/samples) while you build your game or [ask us questions](https://github.com/excaliburjs/Excalibur/discussions).

## Get Started

* Using [Node.js](https://nodejs.org/en/) 18 (LTS) and [yarn](https://classic.yarnpkg.com/en/) classic.

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list


sudo apt install -y gcc g++ make build-essential nodejs yarn
```

* Run the `yarn install` to install dependencies
* Run the `yarn start` to run the development server to test out changes
   * [Webpack](https://webpack.js.org/) will build the [Typescript](https://www.typescriptlang.org/) into Javascript
   * [Webpack dev server](https://webpack.js.org/configuration/dev-server/) will host the script in a little server on http://localhost:8080/

## Publishing

* Run `npm run build:dev` to produce Javascript bundles for debugging in the `dist/` folder
* Run `npm run build:prod` to produce Javascript bundles for production (minified) in the `dist/` folder

The `dist/` folder can be deployed to a static web host. We recommend [Netlify](https://netlify.com) or [GitHub Pages](https://pages.github.com/) since they are free to use.