/**
 * 平衡二叉树
 */
class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
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
}

class AVLTree extends BinarySearchTree {
  constructor() {
    super()
  }

  // 计算节点高度
  getNodeHeight(node) {
    if (node === null) return 0;
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // 获取节点的平衡因子

  /**
   * LL旋转: 向右旋转
   * 
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                         /   / \
   *   c   d                       f   d   e
   *  /
   * f
   *
   */
  rotationLL(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  /**
   * RR旋转: 向左旋转
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \   \
   *     d   e                      c   d   f
   *          \
   *           f
   *
   */
  rotationRR(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  /**
   * LR旋转: 先向左旋转，然后再向右旋转
   */
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node)
  }

  /**
   * RL旋转: 先向右旋转，然后再向左旋转
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node)
  }

  insert(key) {
    super.insert(key);

    // 左子树高度大于右子树高度
    if (this.getNodeHeight(this.root.left) - this.getNodeHeight(this.root.right) > 1) {
      if (key < this.root.left.data) {
        this.root = this.rotationLL(this.root)
      } else {
        this.root = this.rotationLR(this.root)
      }
    } else if (this.getNodeHeight(this.root.right) - this.getNodeHeight(this.root.left) > 1) {
      // 右子树高度大于左子树高度
      if (key > this.root.right.data) {
        this.root = this.rotationRR(this.root)
      } else {
        this.root = this.rotationRL(this.root)
      }
    }
  }

  remove(key) {
    super.remove(key);

    // 左子树高度大于右子树高度
    if (this.getNodeHeight(this.root.left) - this.getNodeHeight(this.root.right) > 1) {
      if (key < this.root.left.data) {
        this.root = this.rotationLL(this.root)
      } else {
        this.root = this.rotationLR(this.root)
      }
    } else if (this.getNodeHeight(this.root.right) - this.getNodeHeight(this.root.left) > 1) {
      // 右子树高度大于左子树高度
      if (key > this.root.right.data) {
        this.root = this.rotationRR(this.root)
      } else {
        this.root = this.rotationRL(this.root)
      }
    }
  }
}

let avlTree = new AVLTree();

avlTree.insert(11)
avlTree.insert(7)
avlTree.insert(15)
avlTree.insert(13)
avlTree.insert(20)

avlTree.remove(7)

avlTree.preOrderTraveral(el => console.log(el)) // 13 11 15 20
