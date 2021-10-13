/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.first){
      [ newNode.next, this.first ] = [ this.first, newNode ];
    } else {
      this.first = this.last = newNode;
    }
    this.size ++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      const firstNode = this.first;
      this.first = this.first.next;
      this.size --;
      return firstNode.val;
    } catch(e) {
      throw e;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first ? this.first.val : null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first === null;
  }
}

module.exports = Stack;
