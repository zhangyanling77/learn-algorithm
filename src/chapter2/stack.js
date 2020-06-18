/** 
 * 数据结构基础
 * 栈
*/
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

  push(element) {
    this.data[this.top++] = element
  }

  pop() {
    return this.data[--this.top]
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

stack.output() // 1 2 3 4

console.log(stack.pop()) // 4
