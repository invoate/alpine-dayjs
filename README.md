# An AlpineJS Wrapper for DayJS

[![Latest Version on NPM](https://img.shields.io/npm/v/@invoate/alpine-dayjs?style=flat-square)](https://www.npmjs.com/package/@invoate/alpine-dayjs)
[![Total Downloads](https://img.shields.io/npm/dt/@invoate/alpine-dayjs?style=flat-square)](https://www.npmjs.com/package/@invoate/alpine-dayjs)

This is a simple plugin for [AlpineJS](https://alpinejs.dev) that wraps the popular JavaScript date library [DayJS](https://day.js.org).

## Installation

You can install this package via NPM:

```shell
npm install @invoate/alpine-dayjs
```

or by CDN:

```html
<!-- Plugin -->
<script src="https://unpkg.com/@invoate/alpine-dayjs/dist/alpine-dayjs.min.js" defer></script>
<!-- AlpineJS -->
<script src="https://unpkg.com/alpinejs/dist/cdn.min.js" defer></script>
```

### Setup

First you must register the plugin with Alpine.

```js
import Alpine from "alpinejs"
import alpineDayJS from "@invoate/alpine-dayjs"

Alpine.plugin(alpineDayJS({}))

Alpine.start()
```
### Usage

In your views, you can now use the x-dayjs directive.

```html
<!-- Displays the current time using the default/configured format -->
<time x-data x-dayjs></time>

<!-- Displays the 1st of January 2000, as parsed by DayJS -->
<time x-data x-dayjs="2000-01-01"></time>

<!-- Displays the current date using the format YYYY-MM-DD -->
<time x-data x-dayjs x-dayjs-format="YYYY-MM-DD"></time>

<!-- Use a AlpineJS property with the .bind modifier -->
<div x-data="{ date: '2000-01-01' }">
    <time x-dayjs.bind="date"></time>
</div>
```

### Options

The package comes with sensible defaults however you may wish to configure them.

| Argument      | Description                                              | Default    |
|---------------|----------------------------------------------------------|------------|
| dayjs         | Pass your own instance of DayJS                          | na         |
| defaultFormat | The default format dates should be formatted as, default | DD/MM/YYYY |

```js
import dayjs from "dayjs"
import localeEs from "dayjs/locale/es"
import localizedFormat from "dayjs/plugin/localizedFormat"
import Alpine from "alpinejs"
import alpineDayJS from "@invoate/alpine-dayjs"

dayjs.extend(localizedFormat)
dayjs.locale(localeEs)

Alpine.plugin(alpineDayJS({
    dayjs: dayjs // A custom DayJS instance with the LocalizedFormat plugin and Spanish Locale
    defaultFormat: 'LLL' // LocalizedFormat and Spanish Locale = D [de] MMMM [de] YYYY H:mm
}))

Alpine.start()
```

## Credits

- [Oliver Lumby](https://github.com/olumby)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
