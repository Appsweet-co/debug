{{ template:title }}
{{ template:description }}
{{ template:badges }}

## Install

```sh
npm install @appsweet-co/debug
```

## Usage

Import utilities directly into your files:

```ts
import { Debug, DebugOpts } from '@appsweet-co/debug';

const config: DebugOpts = {
  disabled: ['warn'],
  prefix: 'FooBar',
  showMeta: true
};

const debug = Debug(config);

debug.log('Hello World')
// [LOG] [FooBar] Hello World

debug.warn('Goodbye World');
// <No output>
```

## Documentation

We generate API documentation using [TypeDoc](http://typedoc.org/). View the docs page [here](https://appsweet-co.github.io/debug).

## Updating This README

We generate this README with the [@appnest/readme](https://github.com/andreasbm/readme) tool.

Run `npx @appnest/readme generate` or `npm run readme` to update this file.

## Author

👤 **Appsweet.co**

* Website: http://a6t.co
* Github: [@appsweet-co](https://github.com/appsweet-co)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/appsweet-co/debug/issues).

## Show your support

Give a ⭐️ if this project helped you!
