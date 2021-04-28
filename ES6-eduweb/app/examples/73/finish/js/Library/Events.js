export default {

    on(type, fn) {
        return this.each( node => node.addEventListener(type, fn, false) );
    },

    off(type, fn) {
        return this.each( node => node.removeEventListener(type, fn, false) );
    }

};