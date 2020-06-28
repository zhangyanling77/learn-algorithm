/** 
 * 二叉树及遍历
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
      // console.log(currentNode)
      console.log(currentNode.data)
      currentNode = currentNode.next;
    }
  }
}
class TreeNode {
  constructor(data){
    this.data = data; // 节点携带数据
    this.left = null; // 左孩子
    this.right = null; // 右孩子
  }
}

/**
 * 构建二叉树
 */
function createBinaryTree(inputList) {
  let node = null;
  if (inputList === null) {
    return null
  }
  // 取出头节点
  let head = inputList.remove(0);
  if (head.data !== null) {
    node = new TreeNode(head.data);
    node.left = createBinaryTree(inputList);
    node.right = createBinaryTree(inputList);
  }

  return node;
}

/**
 * 前序遍历
 */
function preOrderTraveral(node) {
  if (node === null) {
    return;
  }
  console.log(node.data)
  preOrderTraveral(node.left)
  preOrderTraveral(node.right)
} 

/**
 * 中序遍历
 */
function inOrderTraveral(node) {
  if (node === null) {
    return;
  }
  inOrderTraveral(node.left)
  console.log(node.data)
  inOrderTraveral(node.right)
}

/**
 * 后序遍历
 */
function postOrderTraveral(node) {
  if (node === null) {
    return;
  }
  postOrderTraveral(node.left)
  postOrderTraveral(node.right)
  console.log(node.data)
}

let llist = new LinkedList();
const arr = [3, 2, 9, null, null, 10, null, null, 8, null, 4];
for (let i = 0; i < arr.length; i++) {
  llist.insert(arr[i], i)
}
// llist.output()

let treeNode = createBinaryTree(llist);

console.log('前序遍历：', treeNode)
preOrderTraveral(treeNode)

console.log('中序遍历：', treeNode)
inOrderTraveral(treeNode)

console.log('后序遍历：', treeNode)
postOrderTraveral(treeNode)
