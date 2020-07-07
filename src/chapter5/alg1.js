/** 
 * 面试中的算法
 * 
 * 1、如何判断链表有环
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function isCircle(head) {
  let p1 = head;
  let p2 = head;
  while(p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p1) {
      return true
    }
  }
  return false;
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(7);
let node4 = new Node(2);
let node5 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

console.log(isCircle(node1)) // true
