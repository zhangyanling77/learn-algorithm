/** 
 * 数据结构基础
 * 链表
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
// 单向链表
class LinkedList {
  constructor() {
    // 头节点
    this.head = new Node("head");
    // 尾节点
    this.tail = new Node("tail");
    // 链表实际长度
    this.size = 0;
  }
  /**
   * 链表插入元素
   * @param {要插入的数据} data
   * @param {要插入的位置} index
   * @memberof LinkedList
   */
  insert(data, index) {
    // 边界判断
    if (index < 0 || index > this.size) {
      throw new Error('超出链表节点范围！')
    }
    // 要插入的节点
    let insertedNode = new Node(data);
    // 
    if (this.size === 0) { // 空链表
      this.head = insertedNode
      this.tail = insertedNode
    } else if (index === 0) { // 头部插入
      insertedNode.next = this.head
      this.head = insertedNode
    } else if (this.size === index) { // 尾部插入
      this.tail.next = insertedNode
      this.tail = insertedNode
    } else { // 中间插入
      let prevNode = this.find(index - 1); // 拿到前一个节点
      insertedNode.next = prevNode.next;
      prevNode.next = insertedNode
    }
    this.size++;
  }
  /**
   * 链表查找元素
   * @param {查找元素的位置} index
   * @memberof LinkedList
   */
  find(index) {
    if (index < 0 || index > this.size) {
      throw new Error('超出链表节点范围！')
    }
    // 临时变量，用于节点的替换
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode;
  }
  /**
   * 链表删除
   * @param {查找元素的位置} index
   * @memberof LinkedList
   */
  remove(index) {
    if (index < 0 || index > this.size) {
      throw new Error('超出链表节点范围！')
    }
    //
    let removedNode = new Node(null);
    if (index === 0) { // 删除头节点
      removedNode = this.head;
      this.head = this.head.next;
    } else if (index === this.size - 1) { // 删除尾节点
      let prevNode = this.find(index - 1);
      removedNode = prevNode.next;
      prevNode.next = null;
      this.tail = prevNode;
    } else { // 删除中间的节点
      let prevNode = this.find(index - 1);
      let nextNode = this.find(index + 1);  // prevNode.next.next;
      removedNode = prevNode.next;
      prevNode.next = nextNode
    }
    this.size--;
    return removedNode;
  }

  output() {
    let currentNode = this.head;
    while(currentNode !== null) {
      console.log(currentNode.data)
      currentNode = currentNode.next;
    }
  }
}

let llist = new LinkedList();

llist.insert(3, 0)
llist.insert(7, 1)
llist.insert(9, 2)
llist.insert(5, 3)
llist.insert(6, 1) 

llist.output() // 3 6 7 9 5

llist.remove(0)

llist.output() // 6 7 9 5
