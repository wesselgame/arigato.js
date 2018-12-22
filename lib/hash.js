const { type }       = require( './check' );
const { string }     = require( './random' );
const { getHashes }  = require( 'crypto' );
const { pbkdf2Sync } = require( 'pbkdf2' );

const hashes = getHashes();

module.exports = class hashArigato {
  /**
   * @name hash
   * @description Hash a string
   * @param {string} str The string to hash
   * @param {string} salt The salt to use when hashing
   * @param {string} method The hashing method to use
   * @param {number} iterations The total iterations of the hash
   * @returns {{salt: *, method: *, str: *, hash: *, iterations: *}} The hashed string
   */
  static hash( str, salt, method, iterations ) {
    if ( type( str ) !== 0 ) throw new TypeError( 'Value "str" must be a string' );

    salt       = ( type( salt ) === 0 ? salt : string( 128, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#_' ) );
    method     = ( method && hashes.includes( method ) ? method : 'md5' );
    iterations = ( type( iterations ) === 7 ? iterations : 1000 );

    const hash = pbkdf2Sync( str, salt, 1, iterations, method );

    return {
      str       : str,
      hash       : hash,
      salt       : salt,
      method     : method,
      iterations : iterations
    };
  }

  /**
   * @name check
   * @description Check if a hash matches a string
   * @param {string} str The string to check for
   * @param {hash} oHash The original hash to check with
   * @param {string} salt The original hash's salt to use
   * @param {string} method The original hash's method to use
   * @param {number} iterations The original hash's iterations
   * @returns {boolean} The hash matched with the values
   */
  static check( str, oHash, salt, method, iterations ) {
    if ( type( str ) !== 0 )  throw new TypeError( 'Value "str" must be a string' );
    if ( type( oHash ) !== 0 ) throw new TypeError( 'Value "oHash" must be a string' );

    salt       = salt ? salt : '';
    method     = ( method && hashes.includes( method ) ? method : 'md5' );
    iterations = ( type( iterations ) === 7 ? iterations : 1000 );

    const hash = pbkdf2Sync( str, salt, 1, iterations, method );

    return ( oHash.toString( 'base64' ) === hash.toString( 'base64' ) );
  }
};