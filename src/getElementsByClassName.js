// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // Instruction: Use document.body  , element.childNodes  , and element.classList  in your solution
  // https://learn-2.galvanize.com/cohorts/3848/blocks/879/content_files/Recursion/exercises/recursion.md

  // Initialize the result array
  var results = [];

  // Initial the element
  // element === undefined ? element = element : element = document.body;
  if (element === undefined) {
    element = document.body;
  }

  // Check current element, if includes the classNme
  if (element.classList !== undefined) {
    for (var i = 0; i <= element.classList.length - 1; i++) {
      if (element.classList[i] === className) {
        results.push(element);
      }
    }
  }

  // base case: If current element has no children, return; otherwise, iterate through the children, check each child
  if (element.childNodes.length === 0) {
    return results;
  }
  // recursive case:
  if (element.childNodes.length > 0) {
    for (var i = 0; i <= element.childNodes.length - 1; i++) {

      results = results.concat(getElementsByClassName(className, element.childNodes[i]));
    }
  }

  // return the result
  return results;

};
