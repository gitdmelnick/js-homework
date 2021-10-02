function makeObjectDeepCopy(original) {
  if(Array.isArray(original)) {
    return original.map(value => makeObjectDeepCopy(value))
  } else if (Object.prototype.toString.call(original) === '[object Object]') {
    const copy = {};
    for (const [key, value] of Object.entries(original)) {
      copy[key] = makeObjectDeepCopy(value);
    }
    return copy;
  } else {
    return original
  }
}
