function deepCopy(src) {
  return Object.keys(src).reduce((v, d) => Object.assign(v, {
    [d]: (src[d].constructor === Object) ? deepCopy(src[d]) : src[d]
  }), Array.isArray(src) ? [] : {});
}





