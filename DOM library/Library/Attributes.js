import { isObject } from '../Utils/Check.js';

export default {
  attr(key, val) {
    if (key !== undefined && val === undefined) {
      return this.get(0).getAttribute(key);
    } else {
      this.each((node) => node.setAttribute(key, val));
    }
  },
  addClass(className) {
    this.each((node) => node.classList.add(className));
  },
  removeClass(className) {
    return this.each((node) => node.classList.remove(className));
  },
  toogleClass(className) {
    return this.each((node) => node.classList.toogle(className));
  },
  hasClass(className) {
    return this.each((node) => node.classList.has(className));
  },
  css(prop, val) {
    if (prop !== undefined && val !== undefined) {
      this.each((node) => (node.style[prop] = val)); // dynamiczne przekazanie[prop]
    } else if (isObject(prop)) {
      for (let key in prop) {
        this.each((node) => (node.style[key] = prop[key]));
      }
    } else {
      return this.get(0).style[prop];
    }
  },
};
