<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">@appsweet-co/debug</h1>
<p align="center">
  <b>Makes your console logs much better.</b></br>
  <sub><sub>
</p>

<br />

<p align="center">
		<a href="https://www.npmjs.com/package/@appsweet-co/debug"><img alt="Version" src="https://img.shields.io/npm/v/@appsweet-co/debug.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/appsweet-co/debug/blob/main/README.md"><img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" height="20"/></a>
<a href="https://github.com/appsweet-co/debug/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" height="20"/></a>
	</p>



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#install)

## ➤ Install

```sh
npm install @appsweet-co/debug
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## ➤ Usage

Import utilities directly into your files:

```javascript
import { Debug } from '@appsweet-co/debug';

const config = {
  disabled: ['warn'],
  meta: true,
  prefix: 'Foo',
};

const debug = Debug(config);

debug.log('Hello World')
```

The code above makes the following console output:

```
[LOG] [Foo] Hello World
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#documentation)

## ➤ Documentation

We generate function documentation using [TypeDoc](http://typedoc.org/). View documentation locally using this `npm` command:

```sh
npm run docs
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#updating-this-readme)

## ➤ Updating This README

We generate this README with the [@appnest/readme](https://github.com/andreasbm/readme) tool.

Run `npx @appnest/readme generate` or `npm run readme` to update this file.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#author)

## ➤ Author

👤 **Appsweet.co**

* Website: http://a6t.co
* Github: [@appsweet-co](https://github.com/appsweet-co)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#-contributing)

## ➤ 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/appsweet-co/debug/issues).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#show-your-support)

## ➤ Show your support

Give a ⭐️ if this project helped you!
