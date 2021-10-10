function concatStrings(str, separator) {
  return function(nextStr) {
    if(typeof nextStr !== 'string' || nextStr.length === 0) {
      return str;
    }
    return concatStrings(`${str}${typeof separator==='string' ? separator : ''}${nextStr}`, separator)
  }
}


class Calculator {
  constructor(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('');
    }
    this.x = x;
    this.y = y;

    this.logSum = this.logSum.bind(this);
    this.logDiv = this.logDiv.bind(this);
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
  }

  logSum(){
    console.log(this.x + this.y);
  }

  logDiv() {
    console.log(Math.round(this.x / this.y));
  }

  setX(value) {
    this.x = value;
  }

  setY(value) {
    this.y = value;
  }

}

