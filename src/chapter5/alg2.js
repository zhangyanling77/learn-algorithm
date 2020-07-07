/** 
 * 面试中的算法
 * 
 * 2、最小栈的实现
 * 
 * 问题：实现一个栈，该栈带有出栈（pop）、入栈（push）、取最小元素（getMin）3个方法。
 * 要求：要保证三个方法的时间复杂度为 O(1)
*/

class Stack {
  constructor() {
    this.array = []
    this.top = 0 // 栈顶
  }
  // 入栈
  push(element) {
    this.array[this.top++] = element
  }
  // 出栈
  pop() {
    return this.array[--this.top]
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

class MinStack {
  constructor() {
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }
  // 入栈
  push(element) {
    this.mainStack.push(element);
    // 如果辅助栈为空，或者新元素小于或等于辅助栈栈顶，则将新元素压入辅助栈
    if (this.minStack.empty() || element < this.minStack.peek()) {
      this.minStack.push(element);
    }
  }
  // 出栈
  pop() {
    // 如出栈元素和辅助栈栈顶元素相等，辅助栈出栈
    if (this.minStack.peek() === this.mainStack.peek()) {
      this.minStack.pop();
    }
    return this.mainStack.pop();
  }
  // 获取栈最小元素
  getMin() {
    if (this.mainStack.empty()) {
      throw new Error('stack is empty!')
    }
    return this.minStack.peek();
  }
}

let stack = new MinStack();
stack.push(4)
stack.push(9)
stack.push(7)
stack.push(3)
stack.push(8)
stack.push(5)
console.log(stack.getMin()) // 3
stack.pop()
stack.pop()
stack.pop()
console.log(stack.getMin()) // 4
