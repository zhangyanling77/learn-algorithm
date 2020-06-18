/** 
 * 数据结构基础
 * 队列
*/

class Queue {
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
  // 入队
  enqueue(element) {
    this.data.push(element);
  }
  // 出队
  dequeue() {
    return this.data.shift();
  }
  // 队列是否为空
  empty() {
    return this.data.length == 0 ? true : false;
  }

  output() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
    }
  }
}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

// queue.output() // 1 2 3 4

queue.dequeue()

console.log(queue.front()) // 2
console.log(queue.rear()) // 4

queue.dequeue()
queue.dequeue()
queue.dequeue()
 
console.log(queue.empty()) // true