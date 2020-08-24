# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vaishalinpm/lotide`

**Require it:**

`const _ = require('@vaishalinpm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEquals(actual, expected)`: Checks if arrays are equal
* `assertEqual(actual, expected) `: Checks if values are equal
* `eqObjects (object1, object2)`: Checks if objects are equal
* `countLetters (input)`: Counts letter for an input
* `countOnly (allItems, itemsToCount)`: Count only specific items
* `eqArrays (arr1, arr2)`: Checks if arrays are equal
* `findKey (obj, callback)`: Finds key for a condition
* `head (arr)`: Finds head of array
* `letterPositions (sentence)`: Finds letter position in sentence
* `middle (array)`: Finds middle element of array
* `tail (arr)`: Finds tail of array
* `takeUntil (array, callback)`: Takes value in array until condition is met
* `without (values, removableValues)`: Removes values from array

