export default {

    each(fn) {
        this.get().forEach(fn);
        return this;
    }

};