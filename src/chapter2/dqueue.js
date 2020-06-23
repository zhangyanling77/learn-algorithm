/** 
 * 数据结构基础
 * 双向队列
*/
class DQueue {
  constructor() {
    this.data = [];
  }
  // 队头
  front() {
    return this.data[0]
  }
  // 队尾
  rear() {
    return this.data[this.data.length - 1];
  }
  // 队尾添加
  enqueue(element) {
    this.data.push(element);
  }
  // 队头删除
  dequeue() {
    return this.data.shift();
  }
  // 队尾删除
  pop() {
    return this.data.pop();
  }
  // 队头添加
  unshift(element) {
    this.data.unshift(element);
  }
  // 队列是否为空
  empty() {
    return this.data.length == 0 ? true : false;
  }
  
  size() {
    return this.data.length;
  }

  output() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
    }
  }
}

let dqueue = new DQueue();

dqueue.enqueue(1)
dqueue.enqueue(2)
dqueue.enqueue(3)
dqueue.enqueue(4)

// queue.output() // 1 2 3 4

dqueue.dequeue()

console.log(dqueue.front()) // 2
console.log(dqueue.rear()) // 4

dqueue.dequeue()
dqueue.dequeue()
dqueue.dequeue()
 
console.log(dqueue.empty()) // true

dqueue.unshift('a')
dqueue.unshift('b')
dqueue.unshift('c')

// dqueue.output() // c b a

dqueue.pop()

console.log(dqueue.front()) // c
console.log(dqueue.rear()) // b
