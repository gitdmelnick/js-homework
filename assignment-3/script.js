Array.prototype.myFilter = function (callback, thisArg) {
  let filtered = [];

  if (!Array.isArray(thisArg)) {
    thisArg = this;
  }

  for (let i = 0; i < thisArg.length; i++) {
    if (callback(thisArg[i], i, thisArg)) {
      filtered.push(thisArg[i]);
    }
  }

  return filtered;
};

Array.prototype.myFilterES6 = function (callback, thisArg = this) {
  return thisArg.reduce((filtered, currentElement) => {
    if (callback(currentElement)) {
      filtered.push(currentElement);
    }
    return filtered;
  }, []);
};

function createDebounceFunction(func, delay) {
  let timeoutID;

  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => func(...args), delay);
  };
}
