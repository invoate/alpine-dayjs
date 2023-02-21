# An AlpineJS Wrapper for DayJS

This is a simple plugin for [AlpineJS](https://alpinejs.dev) that wraps the popular JavaScript date library [DayJS](https://day.js.org).

## Installation

This package requires AlpineJS to already be installed, you can install this package via npm:

```shell
npm install @invoate/alpine-daysjs
```

### Setup

First you must register the plugin with Alpine.

```js
import Alpine from "alpinejs"
import alpineDayJS from "alpine-dayjs"

Alpine.plugin(alpineDayJS({
    // options
}))

//

Alpine.start()
```

The package comes with sensible defaults however you may wish to configure them.

| Argument      | Description                                              | Default    |
|---------------|----------------------------------------------------------|------------|
| dayjs         | Pass your own instance of DayJS                          | na         |
| defaultFormat | The default format dates should be formatted as, default | DD/MM/YYYY |

### Usage

In your views, you can now use the x-dayjs directive.

```html
<!-- Displays the current time using the default/configured format -->
<time x-data x-dayjs></time>

<!-- Displays the 1st of January 2000, as parsed by DayJS -->
<time x-data x-dayjs="2000-01-01"></time>

<!-- Displays the current date using the format YYYY-MM-DD -->
<time x-data x-dayjs x-dayjs-format="YYYY-MM-DD"></time>
```

## Credits

- [Oliver Lumby](https://github.com/olumby)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
