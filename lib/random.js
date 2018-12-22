const { type } = require( './check' );

module.exports = class randomZin {
  /**
   * @name string
   * @description Generates a random string using the provided seed and length
   * @param {number} length The number of characters to generate
   * @param {string} seed The seed to use when generating characters
   * @returns {string} The generated string
   */
  static string( length = 1, seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ) {
    if ( type( seed ) !== 0 || seed.length <= 0 ) throw new TypeError( 'Value "seed" must be a string' );
    if ( type( length ) !== 7 )                   throw new TypeError( 'Value "count" must be a number' );

    let text = '';
    for( let i = 0; i < length; i++ ) text += seed.charAt( Math.floor( Math.random() * seed.length ) );

    return text;
  }

  /**
   * @name scramble
   * @description Scrambles an array
   * @param {Array} val The array to scramble
   * @returns {Array} The scrambled array
   */
  static scramble( val ) {
    if ( type( val ) !== 5 )  throw new TypeError( 'Value "str" must be an array' );

    let tempValue;
    let randIndex;
    let currentIndex = val.length;

    while( 0 !== currentIndex ) {
      randIndex = Math.floor( Math.random() * currentIndex );
      currentIndex -= 1;

      tempValue         = val[currentIndex];
      val[currentIndex] = val[randIndex];
      val[randIndex]    = tempValue;
    }

    return val;
  }

  /**
   * @name number
   * @description Generates a random number
   * @param {number} min The minimum number
   * @param {number} max The maximum number
   * @returns {number} The generated number
   */
  static number( min = 0, max = 10 ) {
    if ( type( min ) !== 7 ) throw new TypeError( 'Value "min" must be a number' );
    if ( type( max ) !== 7 ) throw new TypeError( 'Value "max" must be a number' );

    if ( min <= 0 )  min = 10;
    if ( max <= 0 )  max = min > max ? min : 20;
    if ( min > max ) max = min;

    return ( Math.floor( Math.random() * ( max - min ) ) + min );
  }

  /**
   * @name float
   * @description Generates a random float
   * @param {number} min The minimum number
   * @param {number} max The maximum number
   * @returns {number} The generated float
   */
  static float( min = 0, max = 10 ) {
    if ( type( min ) !== 7 ) throw new TypeError( 'Value "min" must be a number' );
    if ( type( max ) !== 7 ) throw new TypeError( 'Value "max" must be a number' );

    if ( min <= 0 )  min = 10;
    if ( max <= 0 )  max = min > max ? min : 20;
    if ( min > max ) max = min;

    return ( Math.random() * ( max - min ) + min );
  }
};