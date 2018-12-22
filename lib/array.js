const { type } = require( './check' );

module.exports = class ArigatoArray {
  /**
   * @name list
   * @description List an array
   * @param {Array} array The array to list
   * @param {string} splitter The splitter to use
   * @param {string} conj The final splitter to use
   * @returns {string} The joined array
   */
  static list( array = [], splitter = ', ', conj = 'and' ) {
    if ( type( conj ) !== 0 )      throw new TypeError( 'Value "conj" must be a string' );
    if ( type( splitter ) !== 0 )  throw new TypeError( 'Value "splitter" must be a string' );
    if ( !Array.isArray( array ) ) throw new TypeError( 'Value "this" must be an array' );

    const len = array.length;
    return `${array.slice( 0, -1 ).join( splitter )}${len > 1 ? ` ${conj} ` : ''}${array.slice( -1 )}`;
  }

  /**
   * @name chunk
   * @description Chunk an array into pieces
   * @param {Array} array The array to chunk
   * @param {string} length The length per chunk
   * @returns {Array} The chunked array
   */
  static chunk( array = [], length = 1 ) {
    if ( type( length ) !== 7 )    throw new TypeError( 'Value "length" must be an integer' );
    if ( !Array.isArray( array ) ) throw new TypeError( 'Value "this" must be an array' );

    let i = 0;
    let chunks = [];

    while ( i < array.length ) chunks.push( array.slice( i, i += length ) );

    return chunks;
  }
};