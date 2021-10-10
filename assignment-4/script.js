function concatStrings(str, separator) {
  return function(nextStr) {
    if(typeof nextStr !== 'string' || nextStr === 0) return str;
      return concatStrings(`${str}${typeof separator==='string' ? separator : ''}${nextStr}`, separator)
  }
}