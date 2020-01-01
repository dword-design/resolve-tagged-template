<!-- TITLE/ -->

<h1>resolve-tagged-template</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/resolve-tagged-template" title="View this project on NPM"><img src="https://img.shields.io/npm/v/resolve-tagged-template.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/resolve-tagged-template" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/resolve-tagged-template/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/resolve-tagged-template" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/resolve-tagged-template.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/resolve-tagged-template" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/resolve-tagged-template.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Resolves a tagged template literal into a string. This is helpful when implementing tag functions that are not interested in the placeholders but only in the resulting string.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save resolve-tagged-template</code></li>
<li>Import: <code>import * as pkg from ('resolve-tagged-template')</code></li>
<li>Require: <code>const pkg = require('resolve-tagged-template')</code></li>
</ul>

<!-- /INSTALL -->


<h2>Usage</h2>

```js
import resolveTaggedTemplate from 'resolve-tagged-template'

export default tagFunction = (...args) => resolveTaggedTemplate(...args) + '-tagged'

console.log(tagFunction`foo`)
// 'foo-tagged'
```

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Sebastian Landwehr</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
