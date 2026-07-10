<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sfirstIndexEqual

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sfirst-index-equal
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sfirstIndexEqual = require( '@stdlib/blas-ext-base-sfirst-index-equal' );
```

#### sfirstIndexEqual( N, x, strideX, y, strideY )

Returns the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 3.0, 0.0 ] );

var idx = sfirstIndexEqual( x.length, x, 1, y, 1 );
// returns 2
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.

If the function is unable to find matching elements, the function returns `-1`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( [ 5.0, 6.0, 7.0, 8.0 ] );

var idx = sfirstIndexEqual( x.length, x, 1, y, 1 );
// returns -1
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compare every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0 ] );

var idx = sfirstIndexEqual( 3, x, 2, y, 2 );
// returns 1
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 3.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Find index...
var idx = sfirstIndexEqual( 2, x1, 1, y1, 1 );
// returns 1
```

#### sfirstIndexEqual.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Returns the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 3.0, 0.0 ] );

var idx = sfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns 2
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of each strided array:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 4.0, 5.0, 6.0 ] );

var idx = sfirstIndexEqual.ndarray( 3, x, 1, x.length-3, y, 1, y.length-3 );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When comparing elements, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var sfirstIndexEqual = require( '@stdlib/blas-ext-base-sfirst-index-equal' );

var x = discreteUniform( 10, 0, 10, {
    'dtype': 'float32'
});
console.log( x );

var y = discreteUniform( 10, 0, 10, {
    'dtype': 'float32'
});
console.log( y );

var idx = sfirstIndexEqual( x.length, x, 1, y, 1 );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/sfirst_index_equal.h"
```

#### stdlib_strided_sfirst_index_equal( N, \*X, strideX, \*Y, strideY )

Returns the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const float y[] = { 0.0f, 0.0f, 3.0f, 0.0f };

int idx = stdlib_strided_sfirst_index_equal( 4, x, 1, y, 1 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
CBLAS_INT stdlib_strided_sfirst_index_equal( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sfirst_index_equal_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!-- lint disable maximum-heading-length -->

Returns the index of the first element in a single-precision floating-point strided array equal to a corresponding element in another single-precision floating-point strided array using alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const float y[] = { 0.0f, 0.0f, 3.0f, 0.0f };

int idx = stdlib_strided_sfirst_index_equal_ndarray( 4, x, 1, 0, y, 1, 0 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
CBLAS_INT stdlib_strided_sfirst_index_equal_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/sfirst_index_equal.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    const float y[] = { 0.0f, -1.0f, -2.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify strides:
    const int strideX = 1;
    const int strideY = 1;

    // Perform a search:
    int idx = stdlib_strided_sfirst_index_equal( N, x, strideX, y, strideY );

    // Print the result:
    printf( "index value: %d\n", idx );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sfirst-index-equal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sfirst-index-equal

[test-image]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sfirst-index-equal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sfirst-index-equal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sfirst-index-equal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sfirst-index-equal/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sfirst-index-equal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sfirst-index-equal/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
