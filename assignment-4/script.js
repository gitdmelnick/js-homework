function concatStrings(str, separator) {
  return function (nextStr) {
    if (typeof nextStr !== 'string') {
      return str;
    }
    return concatStrings(
      `${str}${typeof separator === 'string' ? separator : ''}${nextStr}`,
      separator
    );
  };
}

class Calculator {
  constructor(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('');
    }
    this.x = x;
    this.y = y;

    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('');
    }
    console.log(this.x / this.y);
  }

  setX(num) {
    if (!Number.isInteger(num)) {
      throw new Error('');
    }
    this.x = num;
  }

  setY(num) {
    if (!Number.isInteger(num)) {
      throw new Error('');
    }
    this.y = num;
  }
}


