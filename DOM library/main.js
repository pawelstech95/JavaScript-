import { isSelector, isHTMLTag, isDOMNode } from './Utils/Check.js';
import { findElements, createElement } from './Utils/Element.js';
function init(param) {
  let nodes = null;

  if (isSelector(param)) {
    nodes = findElements(param);
  } else if (isHTMLTag(param)) {
    nodes = createElement(param);
  } else if (isDOMNode(param)) {
    nodes = param;
  }
}

window.eQuery = init; // przypisujemy funkcje jako globalna
init('li')
console.log(init())
// let lis = eQuerry('li');
