/** 
 * 数据结构基础
 * 数组
*/

// 1.读取元素

// const arr = new Array(1, 2, 3, 4);
// console.log(arr[2])

// 2.更新元素
// arr[3] = 5
// console.log(arr) 

// 3.插入元素

// 3.1 队尾插入

// arr[4] = 5
// console.log(arr)

/** 
 * 3.2 中间插入
 * 思路：
 * 1、首先生成一个给定容量 (capacity) 大小的数组，默认实际元素的个数 size 为 0
 * 2、向数组中插入元素，传入插入的位置 index，插入的元素 element
 * 3、判断传入的 index 是否越界，若越界抛出错误
 * 4、从右向左循环，将元素逐个向后挪一位
 * 5、将要插入的元素放到数组对应index下标的位置上
 * 
 * 这里需要注意，超范围插入的情况。解决办法是，创建一个新数组，
 * 它的长度是原数组的两倍，并将原数组中的所有元素复制到新的数组中，实现数组的扩容。
*/

// function MyArray(capacity) {
//   this.array = new Array(capacity);
//   this.size = 0;
// }

// MyArray.prototype.resize = function() {
//   const arrayNew = new Array(this.array.length * 2);
//   for (let i = 0; i < this.array.length; i++) {
//     arrayNew[i] = this.array[i]
//   }
//   this.array = arrayNew
// }

// MyArray.prototype.insert = function(index, element) {
//   if (index < 0 || index > this.size) {
//     throw new Error('超出数组实际元素范围！')
//   }
//   // 超范围插入
//   if (this.size >= this.array.length) {
//     this.resize()
//   }
//   // 从右向左循环，将元素逐个向后挪一位
//   for (let i = this.size - 1; i >= index; i--) {
//     this.array[i + 1] = this.array[i]
//   }
//   // 插入元素
//   this.array[index] = element;
//   this.size++;
// }

// MyArray.prototype.output = function() {
//   for (let i = 0; i < this.size; i++) {
//     console.log(this.array[i])
//   }
// }

class MyArray {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.size = 0;
  }

  resize () {
    const arrayNew = new Array(this.array.length * 2);
    for (let i = 0; i < this.array.length; i++) {
      arrayNew[i] = this.array[i]
    }
    this.array = arrayNew
  }

  insert(index, element) {
    // 边界判断
    if (index < 0 || index > this.size) {
      throw new Error('超出数组实际元素范围！')
    }
    // 超范围插入
    if (this.size >= this.array.length) {
      this.resize()
    }
    // 从右向左循环，将元素逐个向后挪一位
    for (let i = this.size - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i]
    }
    // 插入元素
    this.array[index] = element;
    this.size++;
  }

  output() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.array[i])
    }
  }

  delete(index) {
    // 判断越界
    if (index < 0 || index >= this.size) {
      throw new Error('超出数组实际元素范围！')
    }
    const deletedElement = this.array[index];
    // 从左向右循环，将元素逐个向前挪一位
    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1]
    }
    this.size--;
    return deletedElement
  }
}

const arr = new MyArray(4);

// arr.insert(-1, 3) // 抛错
// arr.insert(5, 9) // 抛错

arr.insert(0, 3)
arr.insert(1, 7)
arr.insert(2, 9)
arr.insert(3, 5)
arr.insert(1, 6)

// arr.output() // 3 6 7 9 5
// console.log(arr) // MyArray { array: [ 3, 6, 7, 9, 5, <3 empty items> ], size: 5 }

// 4.删除元素

arr.delete(3) // 也就是删掉9
arr.output() // 3 6 7 5