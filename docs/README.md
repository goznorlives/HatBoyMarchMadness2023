# Technical notes.

If you're contributing to this project, you'll need to know a few things.

This project is built using [Typescript](https://www.typescriptlang.org/) and [Webpack](https://webpack.js.org/), and we assume you're using an Ubuntu development environment.

## Development

After checking out the code, you also need to pull down the submodules:

```bash
git submodule update --init --recursive
```

Additionally, you'll need to install the following dependencies:

* [Node.js](https://nodejs.org/en/) 18 (LTS) and [yarn](https://classic.yarnpkg.com/en/) classic.

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list


sudo apt install -y gcc g++ make build-essential nodejs yarn
```

* Run the `yarn install` to install node.js packages
* Run the `yarn start` to run the development server to test out changes
   * [Webpack](https://webpack.js.org/) will build the [Typescript](https://www.typescriptlang.org/) into Javascript
   * [Webpack dev server](https://webpack.js.org/configuration/dev-server/) will host the script in a little server on http://localhost:8080/

## Publishing

* Run `yarn run build:dev` to produce Javascript bundles for debugging in the `dist/` folder
* Run `yarn run build:prod` to produce Javascript bundles for production (minified) in the `dist/` folder

The `dist/` folder can be deployed to a static web host.
