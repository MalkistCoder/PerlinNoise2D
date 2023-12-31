# Perlin Noise 2D

[Demo](https://perlin-noise-2d-demo.netlify.app/)

A simple 2D [Perlin Noise](https://wikipedia.org/wiki/Perlin_noise) implementation in JavaScript.

This package depends on the [seedrandom](https://www.npmjs.com/package/seedrandom) package to generate random numbers with a seed.

## Installation

Open your command prompt/terminal and type:

```
npm i --save perlin-noise-2d
```

## How to use

First import the `PerlinNoise` class.
```js
import PerlinNoise from 'perlin-noise-2d'
// or...
const PerlinNoise = require('perlin-noise-2d')
```

Then, instantiate your own `PerlinNoise` object. From there, you can use the `.perlin()` function to get the noise.

```js
const perlin = new PerlinNoise(8, 12) // Width is 8, Height is 12

perlin.perlin(4.5, 2.5)
```

You can also specify a seed for your noise. It will always generate the same value given the same seed.

```js
const perlin = new PerlinNoise(8, 8, 9001) // 9001 is the seed

perlin.perlin(2.5, 2.5) // Will always be 0.39800954642327513
```
