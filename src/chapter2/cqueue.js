/** 
 * 数据结构基础
 * 循环队列
 * 队尾指针指向的位置永远空出1位，所以队列的最大容量比数组长度小1
*/

class CQueue {
  constructor(capacity){
    this.array = new Array(capacity);
    this.front = 0; // 队头下标
    this.rear = 0; // 队尾的下标
  }

  enqueue(element) {
    if ((this.rear + 1) % this.array.length === this.front) {
      throw new Error('队列已满！')
    }
    this.array[this.rear] = element;
    this.rear = (this.rear + 1) % this.array.length;
  }

  dequeue() {
    if (this.front === this.rear) {
      throw new Error('队列已空！')
    }
    let deQueueElement = this.array[this.front];
    this.front = (this.front + 1) % this.array.length;
    return deQueueElement;
  }

  output() {
    for (let i = this.front; i !== this.rear; i = (i+1)%this.array.length) {
      console.log(this.array[i])
    }
  }

}

let cqueue = new CQueue(6);

cqueue.enqueue(3);
cqueue.enqueue(5);
cqueue.enqueue(6);
cqueue.enqueue(8);
cqueue.enqueue(1);

// cqueue.output() // 3 5 6 8 1

cqueue.dequeue();
cqueue.dequeue();
cqueue.dequeue();

// cqueue.output() // 8 1

cqueue.enqueue(2);
cqueue.enqueue(4);
cqueue.enqueue(9);

cqueue.output() // 8 1 2 4 9
