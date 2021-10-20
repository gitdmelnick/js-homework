class Stack {
  constructor(maxSize) {
    if ((!Number.isInteger(maxSize) && maxSize !==undefined) || maxSize < 1) {
      throw new Error('maxSize is not a valid integer');
    }

    this.maxSize = maxSize ? maxSize : 10;
    this.size = 0;
    this.top = null;
  }

  push(elem) {
    if(this.size === this.maxSize) {
      throw new Error('Stack overflow');
    }

    let newNode = {data: elem, previous: this.top};
    this.top = newNode;
    this.size++;
  }

  pop() {
    if(this.size < 1) {
      throw new Error('Stack is empty');
    }

    this.top = this.top.previous;
    this.size--;
  }

  peek() {
    return this.top === null ? null : this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }

  toArray() {
    let arr = [];
    let curElem = this.top;

    while(curElem !== null) {
      arr.push(curElem.data);
      curElem = curElem.previous;
    }

    return arr.reverse();
  }

  static fromIterable(iterable) {
    if(iterable === null || iterable === undefined || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Argument is not iterable');
    }

    let stack = new Stack();

    for(let elem of iterable) {
      stack.push(elem);
    }

    stack.maxSize = stack.size;

    return stack;
  }
  
}

// module.exports = { Stack };



