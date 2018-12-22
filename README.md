<div align="center">
    <br />
    <h1>
    	<a href="https://github.com/PassTheWessel">Arigato.JS</a>
    </h1>
    <br />
    <p>
    	<a href="https://discord.gg/SV7DAE9"><img src="https://discordapp.com/api/guilds/107131083958538240/embed.png" alt="Discord " /></a>
        <a href="https://www.npmjs.com/package/arigato.js"><img src="https://img.shields.io/npm/v/arigato.js.svg?maxAge=3600" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/arigato.js"><img src="https://img.shields.io/npm/dt/arigato.js.svg?maxAge=3600" alt="NPM version" /></a>
        <a href="https://www.patreon.com/wessel"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
    </p>
    <p>
    	<a href="https://nodei.co/npm/arigato.js/"><img src="https://nodei.co/npm/arigato.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
    </p>
</div>

## About
Arigato.JS is a [Node.js](https://nodejs.org) library which provides many utility functions that can be used in various ways
- Random string, number and float generation
- String modification
- String hashing
- Array utility
## Installation
**It's recommended to use Node.js v8.0.0 or newer**

```sh
$ npm i arigato.js    # Using NPM
$ yarn add arigato.js # Using yarn
```

## Example usage
Chunking an Array into parts

```js
const { array } = require( 'arigato.js' );     // Define arigato.js
const characters = [ 'a', 'b', 'c', 1, 2, 3 ]; // Define the array
const chunked = array.chunk( characters, 2 );  // Chunk up the array with 2 entries per chunk
console.log( chunked );						   // [ [ 'a', 'b' ], [ 'c', 1 ], [ 2, 3 ] ] 
```
Scrambling a string
```js
const { random } = require( 'argiato.js' ); 				// Define arigato.js
const scrambled = random.scramble( 'scrambled'.split('') ); // Scramble the string
console.log( scrambled ); 								    // cadsrelbm ( This may be diffrent for you ) 
```

## Requests
If you have any ideas that you would like to see in arigato.js, you can request them [here](https://github.com/PassTheWessel/arigato.js/issues) or [here](https://discord.gg/SV7DAE9)
