/** 
 * 数据结构基础
 * 栈
*/

class Stack {
  constructor() {
    this.data = [];
    // 栈顶位置
    this.top = 0;
  }
  // 入栈
  push(element) {
    this.data[this.top++] = element
  }
  // 出栈
  pop() {
    return this.data[--this.top]
  }
  // 返回栈顶元素
  peek() {
    return this.data[this.top - 1]
  }
  // 返回栈的长度
  size() {
    return this.top
  }
  // 清空栈
  clear() {
    this.top = 0
    this.data = []
  }

  output() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
    }
  }
}

let stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

// console.log(stack.peek()) // 4

// stack.output() // 1 2 3 4

console.log(stack.pop()) // 4

console.log(stack.size()) // 3

stack.clear()

console.log(stack.size()) // 0
