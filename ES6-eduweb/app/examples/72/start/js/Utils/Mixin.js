export function mixin(...mixins) {

    const fn = function() {};

    Object.assign(fn.prototype, ...mixins);

    return fn;

}