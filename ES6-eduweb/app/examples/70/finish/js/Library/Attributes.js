export default {

    attr(key, val) {
        if(key !== undefined && val === undefined) {
            return this.get(0).getAttribute(key);
        } else {
            this.each( node => node.setAttribute(key, val) );
        }
    }

};