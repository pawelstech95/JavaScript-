export default {

    text(value) {
        if(value !== undefined) {
            return this.each( node => node.textContent = value );
        } else {
            return this.get(0).textContent;
        }
    },

    html(value) {
        if(value !== undefined) {
            return this.each( node => node.innerHTML = value );
        } else {
            return this.get(0).innerHTML;
        }
    }

};