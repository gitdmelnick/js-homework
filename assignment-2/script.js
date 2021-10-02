function makeObjectDeepCopy(original) {
  if(Array.isArray(original)) {
    return original.map(element => makeObjectDeepCopy(element))
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

function selectFromInterval(array, start, end) {
  if(array.some(element => isNaN(parseInt(element))) || isNaN(parseInt(start)) || isNaN(parseInt(end))) {
    throw new Error('Ошибка!');
  } else {
    return array.filter(element => element >= Math.min(start, end) && element <= Math.max(start, end));
  }
}
