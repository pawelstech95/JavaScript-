class Collection extends Array {

    constructor(...args) {
        if(args.length === 1) {
            super(1);
            this[0] = args[0];
        } else {
            super(...args);
        }
    }

}

let col = new Collection(10, 20, 30);