import { isSelector, isHTMLTag, isDOMNode } from "./Utils/Check.js";

function init(param) {

    let nodes = null;

    if( isSelector(param) ) {
        nodes = findElement(param);
    } else if( isHTMLTag(param) ) {
        nodes = createElement(param);
    } else if( isDOMNode(param) ) {
        nodes = param;
    }

}

window.eQuery = init;