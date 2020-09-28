[![Version](https://img.shields.io/npm/v/@appsweet-co/debug.svg?style=for-the-badge)](https://www.npmjs.com/package/@appsweet-co/debug)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge)](https://github.com/appsweet-co/debug/blob/main/README.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/appsweet-co/debug/blob/main/LICENSE)

# Welcome to Appsweet's Debug Utility 👋

Makes your console logs much better.

## Install

```sh
npm install @appsweet-co/debug
```

## Usage

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
==> [LOG] [Foo] Hello World
```


## Documentation

We generate function documentation using [TypeDoc](http://typedoc.org/). View documentation locally using this `npm` command:

```sh
npm run docs
```

## Author

👤 **Appsweet.co**

* Website: http://a6t.co
* Github: [@appsweet-co](https://github.com/appsweet-co)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/appsweet-co/debug/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [Appsweet](http://a6t.co).

This project is [MIT](https://github.com/appsweet-co/debug/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
