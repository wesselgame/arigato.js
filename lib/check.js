const types = {
  'string'   : 0,
  'symbol'   : 1,
  'object'   : 2,
  'boolean'  : 3,
  'function' : 4,

  'array'    : 5,

  'float'  : 6,
  'integer': 7,

  'undefined': 8
};

exports.types  = types;
module.exports = class checkArigato {
  /**
   * @name type
   * @description Check the type of a value
   * @param {*} v The value to check
   * @returns {number} The type of value
   */
  static type( v ) {
    if ( typeof v === 'string' )                 return types[ 'string' ];
    else if ( Array.isArray( v ) )               return types[ 'array' ];
    else if ( typeof v === 'symbol')             return types[ 'symbol' ];
    else if ( typeof v === 'object' )            return types[ 'object' ];
    else if ( typeof v === 'boolean' )           return types[ 'boolean' ];
    else if ( typeof v === 'function' )          return types[ 'function' ];

    else if ( Number( v ) === v && v % 1 !== 0 ) return types[ 'float' ];
    else if ( Number( v ) === v && v % 1 === 0 ) return types[ 'integer' ];
    else return types[ 'undefined' ];
  }
};