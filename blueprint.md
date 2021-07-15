{{ template:title }}
{{ template:description }}
{{ template:badges }}

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
[LOG] [Foo] Hello World
```

## Documentation

We generate function documentation using [TypeDoc](http://typedoc.org/). View documentation locally using this `npm` command:

```sh
npm run docs
```

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
