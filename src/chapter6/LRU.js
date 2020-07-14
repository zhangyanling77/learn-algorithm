/** 
 * 算法的实际应用
 * 
 * LRU算法的应用
*/
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(limit) {
    this.head = new Node();
    this.end = new Node();
    // 缓存存储上限
    this.limit = limit;
    this.hashMap = new Map();
  }
  get(key) {
    let node = this.hashMap.get(key);
    if (node == null) {
      return null;
    }
    this.refreshNode(node); // 获取一个值，为什么要更新访问位置？
    return node.value;
  }
  put(key, value) {
    let node = this.hashMap.get(key);
    if (node == null) {
      // 如果key不存在，就插入key-value
      if (this.hashMap.size >= this.limit) {
        let oldKey = this.removeNode(this.head);
        this.hashMap.delete(oldKey);
      }
      node = new Node(key, value);
      this.addNode(node);
      this.hashMap.set(key, node);
    } else {
      // 如果key存在，则更新key-value
      node.value = value
      this.refreshNode(node);
    }
  }
  remove(key) {
    let node = this.hashMap.get(key);
    this.removeNode(node);
    this.hashMap.delete(key);
  }
  // 刷新被访问的节点位置
  refreshNode(node) {
    // 如果访问的是尾节点，则无须移动节点
    if (node == this.end) {
      return;
    }
    // 移除节点
    this.removeNode(node);
    // 重新插入节点
    this.addNode(node);
  }
  // 删除节点
  removeNode(node) {
    if (node == this.head && node == this.end) {
      // 移除唯一节点
      this.head = null;
      this.end = null;
    } else if (node == this.end) {
      // 移除尾节点
      this.end = this.end.prev;
      this.end.next = null;
    } else if (node == this.head) {
      // 移除头节点
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      // 移除中间节点
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return node.key;
  }
  // 尾部插入节点
  addNode(node) {
    if (this.end.next == null) {
      this.end.next = node;
      node.prev = this.end;
      node.next = null;
    }
    this.end = node;
    if (this.head.prev == null) {
      this.head = node;
    }
  }
}

let lruCache = new LRUCache(5);
lruCache.put('001', '用户1信息');
lruCache.put('002', '用户2信息');
lruCache.put('003', '用户3信息');
lruCache.put('004', '用户4信息');
lruCache.put('005', '用户5信息');
// lruCache.get('002');
lruCache.put('004', '用户4信息更新');
lruCache.put('006', '用户6信息');
console.log(lruCache.get('001')); // null
console.log(lruCache.get('006')); // 用户6信息
