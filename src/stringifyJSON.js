// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Base cases
  // If obj is null
  if (obj === null) {
    return 'null';
  }
  // if obj is number, boolean,
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  // if obj is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // Recursive cases
  // if object is array
  if (Array.isArray(obj)) {
    var arrayResult = obj.map(function(element) {
      if (typeof element === 'undefined' || typeof element === 'function') {
        return 'null';
      } else {
        return stringifyJSON(element);
      }
    });
    return '[' + arrayResult.join(',') + ']';
  }

  // if object is an object
  if (typeof obj === 'object') {
    var objectResult = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        var value = stringifyJSON(obj[key]);
        objectResult.push('"' + key + '":' + value);
      }
    }
    return '{' + objectResult.join(',') + '}';
  }

};
