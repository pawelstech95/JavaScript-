import eQuery from "./Library/eQuery.js";
import { isSelector, isHTMLTag, isDOMNode } from "./Utils/Check.js";
import { findElements, createElement } from "./Utils/Element.js";
import Ajax from "./Library/Ajax.js";
import { staticMixin } from "./Utils/Mixin.js";

function init(param) {

    let nodes = null;

    if( isSelector(param) ) {
        nodes = findElements(param);
    } else if( isHTMLTag(param) ) {
        nodes = createElement(param);
    } else if( isDOMNode(param) ) {
        nodes = param;
    }

    return eQuery.create(nodes);

}

staticMixin(init, Ajax);

window.eQuery = init;