<!-- TITLE/ -->
# resolve-tagged-template
<!-- /TITLE -->

<!-- BADGES/ -->
[![npm version](https://img.shields.io/npm/v/resolve-tagged-template.svg)](https://npmjs.org/package/resolve-tagged-template)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://github.com/dword-design/resolve-tagged-template/workflows/build/badge.svg)](https://github.com/dword-design/resolve-tagged-template/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/resolve-tagged-template)](https://coveralls.io/github/dword-design/resolve-tagged-template)
[![Dependency status](https://img.shields.io/david/dword-design/resolve-tagged-template)](https://david-dm.org/dword-design/resolve-tagged-template)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://gitpod.io/#https://github.com/dword-design/bar">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a><a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://dword-design.de/images/paypal.svg"
    alt="PayPal"
    height="32"
  >
</a><a href="https://www.patreon.com/dworddesign">
  <img
    src="https://dword-design.de/images/patreon.svg"
    alt="Patreon"
    height="32"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Resolves a tagged template literal into a string. This is helpful when implementing tag functions that are not interested in the placeholders but only in the resulting string.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# npm
$ npm install resolve-tagged-template

# Yarn
$ yarn add resolve-tagged-template
```
<!-- /INSTALL -->

## Usage

```js
import resolveTaggedTemplate from 'resolve-tagged-template'

export default tagFunction = (...args) => resolveTaggedTemplate(...args) + '-tagged'

console.log(tagFunction`foo`)
// 'foo-tagged'
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
