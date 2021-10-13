/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first){
      this.first = this.last = newNode;
    } else {
      [ this.last.next, newNode.previous ] = [ newNode, this.last];
      this.last = newNode;
    }
    this.size ++;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      const firstNode = this.first;
      this.first = firstNode.next;
      this.size --;
      return firstNode.val;
    } catch(e) {
      throw e
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first ? this.first.val : null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first === null
  }
}

module.exports = Queue;
