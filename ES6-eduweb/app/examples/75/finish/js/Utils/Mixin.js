export function mixin(...mixins) {

    const fn = function() {};

    Object.assign(fn.prototype, ...mixins);

    return fn;

}

export function staticMixin(objToMix, ...mixins) {

    Object.assign(objToMix, ...mixins);

    return objToMix;

}