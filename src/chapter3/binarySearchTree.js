/**
 * 二叉查找树（又叫二叉排序树）
 * 用链表的方式实现
 */

class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

 class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 向树中插入一个节点，判断大小决定插入左侧还是右侧
  insert(data) {
    let newNode = new TreeNode(data);
    let insertNode = function (root, newNode) {
      if (newNode.data < root.data) {
        if (root.left === null) {
          root.left = newNode
        } else {
          insertNode(root.left, newNode)
        }
      } else {
        if (root.right === null) {
          root.right = newNode
        } else {
          insertNode(root.right, newNode)
        }
      }
    }
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode)
    }
  }

  // 在树中查找一个节点
  find(data) {
    let findNode = function (node, key) {
      if (node === null) return null;
      if (key < node.data) {
        return findNode(node.left, key)
      } else if (key > node.data) {
        return findNode(node.right, key)
      } else {
        return node
      }
    }
    return findNode(this.root, data)
  }

  // 最小节点
  min(node = this.root) {
    let minNode = function (node) {
      if (node === null) return null;
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }
    return minNode(node)
  }

  // 最大节点
  max(node = this.root) {
    let maxNode = function (node) {
      if (node === null) return null;
      while (node && node.right !== null) {
        node = node.right
      }
      return node
    }
    return maxNode(node)
  }

  // 前序遍历
  preOrderTraveral(callback) {
    let preOrderTraveralNode = function(node, callback) {
      if (node !== null) {
        callback(node.data)
        preOrderTraveralNode(node.left, callback)
        preOrderTraveralNode(node.right, callback)
      }
    }
    preOrderTraveralNode(this.root, callback)
  }

  // 中序遍历
  inOrderTraveral(callback) {
    let inOrderTraveralNode = function(node, callback) {
      if (node !== null) {
        inOrderTraveralNode(node.left, callback)
        callback(node.data)
        inOrderTraveralNode(node.right, callback)
      }
    }
    inOrderTraveralNode(this.root, callback)
  }

  // 后序遍历
  postOrderTraveral(callback) {
    let postOrderTraveralNode = function(node, callback) {
      if (node !== null) {
        postOrderTraveralNode(node.left, callback)
        postOrderTraveralNode(node.right, callback)
        callback(node.data)
      }
    }
    postOrderTraveralNode(this.root, callback)
  }

  // 从树中移除一个节点
  remove(data) {
    let removeNode = function(node, key) {
      if (node === null) return null;
      if (key < node.data) {
        node.left = removeNode(node.left, key)
        return node
      } else if (key > node.data) {
        node.right = removeNode(node.right, key)
        return node
      } else {
        // 情况1：没有孩子节点
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        // 情况2：只有一个孩子节点
        if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }
        // 情况3：左孩子和右孩子都存在
        let temp = this.min(node.left)
        node.data = temp.data
        node.right = removeNode(node.right, temp.data)

        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
 }

 let output = function(data) {
   console.log(data)
 }

 let btree = new BinarySearchTree();

 btree.insert(3)
 btree.insert(4)
 btree.insert(2)
 btree.insert(7)
 btree.insert(9)

 btree.remove(7)

 console.log('前序遍历：')
 btree.preOrderTraveral(output) // 3 2 4 7 9
 
 console.log('中序遍历：')
 btree.inOrderTraveral(output) // 2 3 4 7 9
 
 console.log('后序遍历：')
 btree.postOrderTraveral(output) // 2 9 7 4 3

