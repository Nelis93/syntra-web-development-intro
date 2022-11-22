/** Class representing a Stack. */

class Stack {
  #storage;
  constructor() {
    this.#storage = [];
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    this.#storage.push(value);
    return this;
  }

  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    this.#storage.pop();
    return this;
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    this.#storage[-1];
    return this;
  }
}

const myStack = new Stack();

console.log(myStack);
window.Stack = Stack;
