if(typeof String.prototype.repeatt !== "function") {

    String.prototype.repeatt = function(count) {
        return (new Array(count + 1)).join( this.toString() );
    };

}