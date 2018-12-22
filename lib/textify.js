const maps     = require( './textify.json' );
const { type } = require( './check' );

module.exports = class ArigatoTextify {
  /**
   * @name mock
   * @description Mock a string
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static mock( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.toString().split( '' ).map( ( a, b ) => b % 2 ? a.toLowerCase() : a.toUpperCase() ).join('');
  }

  /**
   * @name reverse
   * @description Reverse a string
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static reverse( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.split( '' ).reverse().join( '' );
  }

  /**
   * @name flip
   * @description Flips a string of latin characters (abcdefg, etc.) upside down
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static flip( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    for( let i = 0; i < Object.keys( maps.flipText ).length; i++ ) str = str.replace( Object.keys( maps.flipText )[ i ], maps.flipText[ Object.keys( maps.flipText )[ i ] ] );
    return str.split( '' ).reverse().join( '' );
  }

  /**
   * @name space
   * @description Space a string out
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static space( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.toString().split( '' ).join( ' ' );
  }

  /**
   * @name cramp
   * @description Cramp a string together
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static cramp( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.toString().replace( /\s/g, '' );
  }

  /**
   * @name aesthetic
   * @description Makes a string of latin characters (abcdefg, etc.) aesthetic
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static aesthetic( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.replace( /[a-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, ( c ) => String.fromCharCode( 0xFEE0 + c.charCodeAt( 0 ) ) ).replace(/ /g, '　');
  }

  /**
   * @name titlecase
   * @description Capitalize and split out a string
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static titlecase( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str.toString().split( '' ).map( ( a ) => a[ 0 ].toUpperCase() + a.slice( 1 ) ).join( ' ' );
  }

  /**
   * @name indicator
   * @description Replaces all latin characters (abcdefg etc.) in a string with regional indicators
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static indicator( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );

    return str.toString().split( '' ).map( ( v ) => {
      if ( v = v.toLowerCase(), maps.indicatorMap[ v ] ) return maps.indicatorMap[ v ];
      return v;
    }).join( ' ' );
  }

  /**
   * @name tree
   * @description Transforms a string into a tree
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static tree( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );

    let a = [];
    let b = 0;
    let c = d => 2 * d + 1;

    for ( let d of str.toString().split( '' ) ) a[ b ] || ( a[ b ] = [] ), a[ b ].push( d ), a[ b ].length > c( b ) && b++;
    for ( let [ d, f ] of a.entries() ) {
      let g = a.length - 1 - d;
      f = f.join( '' ), a[ d ] = f;
      for ( let h = 0; h < g; h++ ) f = ' ' + f, a[ d ] = f;
    }

    return a.join( '\r\n' );
  }

  /**
   * @name tiny
   * @description Transform latin characters (abcdefg, etc.) to tiny latin characters
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static tiny( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    
    return str.toString().split( '' ).map( ( v ) => {
      if ( v = v.toLowerCase(), maps.tinyMap[ v ] ) {
        return maps.tinyMap[ v ];
      }
      return v;
    }).join( ' ' );
  }

  /**
   * @name leet
   * @description Leets a string
   * @param {string} str The string to transform
   * @returns {string} The transformed string
   */
  static leet( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );
    return str
      .replace( /[li]/gi, '1' )
      .replace( /G/g, '6' )
      .replace( /g/g, '9' )
      .replace( /e/gi, '3' )
      .replace( /a/gi, '4' )
      .replace( /s/gi, '5' )
      .replace( /t/gi, '7' )
      .replace( /o/gi, '0' )
      .replace( /z/gi, '2' )
      .replace( /b/gi, '68' ).toUpperCase();
  }

  /**
   * @name accent
   * @description Replace some latin characters (abcdefg, etc.) in a string with accents
   * @param str The string to transform
   * @returns {string} The transformed string
   */
  accent( str ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );

    return str.toString().split( '' ).map( ( v ) => {
      if ( v = v.toLowerCase(), maps.accentMap[ v ] ) {
        let l = Math.floor( Math.random() * maps.accentMap[ v ].length );
        return maps.accentMap[ v ][ l ];
      }
    }).join( '' );
  }
};