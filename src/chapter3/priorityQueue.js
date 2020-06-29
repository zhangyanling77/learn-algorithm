/**
 * 优先队列
 * 用二叉堆的方式实现
 */

 class PriorityQueue {
   constructor() {
     this.array = new Array()
     this.size = 0
   }

   enqueue(key) {
     this.array[this.size++] = key
     this.upAdjust()
   }

   dequeue() {
     if (this.size <= 0) {
       throw new Error('队列已空！')
     }
     // 获取堆顶元素
     let head = this.array[0]
     // 将最后一个元素移动到堆顶
     this.array[0] = this.array[--this.size]
     this.downAdjust()
     return head
   }

   upAdjust() {
    let childIndex = this.size - 1;
    let parentIndex = (childIndex - 1) / 2;
    // temp保存插入的叶子节点值，用于最后的赋值
    let temp = this.array[childIndex];
    while (childIndex > 0 && temp > this.array[parentIndex]) {
      // 并非正真交换，单向赋值即可
      this.array[childIndex] = this.array[parentIndex]
      childIndex = parentIndex
      parentIndex = parentIndex / 2;
    }
    this.array[childIndex] = temp
   }

   downAdjust() {
    let parentIndex = 0
    let temp = this.array[parentIndex];
    let childIndex = 1;
    while (childIndex < this.size) {
      // 如果有右孩子，且右孩子小于左孩子的值，则定位到右孩子
      if (childIndex + 1 < this.size && this.array[childIndex + 1] < this.array[childIndex]) {
        childIndex++;
      }
      // 如果父节点大于任何一个孩子的值，则直接跳出
      if (temp >= this.array[childIndex]) {
        break;
      }
      // 并非正真交换，单向赋值即可
      this.array[parentIndex] = this.array[childIndex]
      parentIndex = childIndex
      childIndex = childIndex * 2 + 1
    }
    this.array[parentIndex] = temp
   }
 }

 let pqueue = new PriorityQueue();

 pqueue.enqueue(3)
 pqueue.enqueue(5)
 pqueue.enqueue(10)
 pqueue.enqueue(2)
 pqueue.enqueue(7)

 console.log('出队元素：', pqueue.dequeue()) // 5
 console.log('出队元素：', pqueue.dequeue()) // 7
