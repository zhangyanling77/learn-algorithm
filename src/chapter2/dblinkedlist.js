/** 
 * 双向链表
*/

class Node {
  constructor(data) {
    this.data = data; // 存储节点数据
    this.next = null; // 指向前一个节点
    this.prev = null; // 指向后一个节点
  }
}

class DBLinkedList {
  constructor() {
    // 头节点
    this.head = new Node("head");
    // 尾节点
    this.tail = new Node("tail");
    // 链表实际长度
    this.size = 0;
  }
  // 查找节点
  find(data) {
    let currentNode = this.head;
    while (currentNode.data != data) {
      if (currentNode.next == null) {
        throw new ErrorEvent('节点未找到或节点不存在！')
      }
      currentNode = currentNode.next
    }
    return currentNode
  }

  output() {
    let currentNode = this.head
    while(currentNode !== null) {
      console.log(currentNode.data)
      currentNode = currentNode.next;
    }
  }

}

let dbllist = new DBLinkedList();

