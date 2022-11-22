/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this._storage = [];
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this._storage.shift(value);
    return this;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    this._storage.unshift();
    return this;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this._storage[0];
  }
}
