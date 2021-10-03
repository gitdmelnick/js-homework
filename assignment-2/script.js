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
  if(array.some(element => !Number.isInteger(element) || !Number.isInteger(start) || !Number.isInteger(end))) {
    throw new Error('Ошибка!');
  } else {
    return array.filter(element => element >= Math.min(start, end) && element <= Math.max(start, end));
  }
}

const myIterable = {
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if(this.to < this.from || !Number.isInteger(this.from) || !Number.isInteger(this.to)) {
      throw new Error('Ошибка!');
    }

    if(this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
}
