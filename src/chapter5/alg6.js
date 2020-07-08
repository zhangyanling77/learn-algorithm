/** 
 * 面试中的算法
 * 
 * 6、如何用栈实现队列
 * 
 * 问题：用栈来模拟一个队列，要实现队列两个基本操作：入队、出队。
 * 
 * 思考：栈的特点是 “先进后出”， 队列的特点是 “先进先出”。
 * 这里可以借助两个栈来实现，让其中一个栈作为队列的入口，负责插入新元素，另一个栈作为队列的出口，负责移除老元素。
*/
class Stack {
  constructor() {
    this.array = []
    this.top = 0 // 栈顶
  }
  // 入栈
  push(element) {
    this.array.push(element)
    this.top++
  }
  // 出栈
  pop() {
    this.top--
    return this.array.pop()
  }
  // 判空
  empty() {
    return this.array.length === 0
  }
  // 返回栈顶元素
  peek() {
    return this.array[this.top - 1];
  }
  // 略 其他方法
}

class StackQueue {
  constructor() {
    this.stackA = new Stack(); // 入队元素
    this.stackB = new Stack(); // 出队元素
  }

  // 入队
  enqueue(element) {
    this.stackA.push(element)
  }

  // 出队
  dequeue() {
    if (this.stackB.empty()) {
      if (this.stackA.empty()) {
        return null
      }
      this.transfer()
    }
    return this.stackB.pop();
  }

  // 栈元素转移
  transfer() {
    while (!this.stackA.empty()) {
      this.stackB.push(this.stackA.pop());
    }
  }
}

const stackQueue = new StackQueue();
stackQueue.enqueue(1)
stackQueue.enqueue(2)
stackQueue.enqueue(3)
console.log(stackQueue.dequeue()) // 1
console.log(stackQueue.dequeue()) // 2
stackQueue.enqueue(4)
console.log(stackQueue.dequeue()) // 3
console.log(stackQueue.dequeue()) // 4
