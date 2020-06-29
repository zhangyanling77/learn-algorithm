/**
 * 二叉堆
 * 用数组的方式实现
 * 
 * 假设父节点的下标是 parent，那么它的左孩子的下标就是 2xparent+1，右孩子的下标就是 2xparent+2。
 */

 /**
  * “上浮”调整
  * @param {*} array 待调整的堆
  */
function upAdjust(array) {
  let childIndex = array.length - 1;
  let parentIndex = (childIndex - 1) / 2;
  // temp保存插入的叶子节点值，用于最后的赋值
  let temp = array[childIndex];
  while (childIndex > 0 && temp < array[parentIndex]) {
    // 并非正真交换，单向赋值即可
    array[childIndex] = array[parentIndex]
    childIndex = parentIndex
    parentIndex = (parentIndex - 1) / 2;
  }
  array[childIndex] = temp
}

/**
 * “下沉”调整
 * @param {*} array 待调整的堆
 * @param {*} parentIndex 要“下沉”的父节点
 * @param {*} length 堆的有效大小
 */
function downAdjust(array, parentIndex, length) {
  // temp保存父节点值，用于最后的赋值
  let temp = array[parentIndex];
  let childIndex = parentIndex * 2 + 1;
  while (childIndex < length) {
    // 如果有右孩子，且右孩子小于左孩子的值，则定位到右孩子
    if (childIndex + 1 < length && array[childIndex + 1] < array[childIndex]) {
      childIndex++;
    }
    // 如果父节点小于任何一个孩子的值，则直接跳出
    if (temp < array[childIndex]) {
      break;
    }
    // 并非正真交换，单向赋值即可
    array[parentIndex] = array[childIndex]
    parentIndex = childIndex
    childIndex = childIndex * 2 + 1
  }
  array[parentIndex] = temp
}

/**
 * 构建堆
 * @param {*} array 待调整的堆
 */
function buildHeap(array) {
  // 从最后一个非叶子节点开始，依次做“下沉”调整
  for (let i = (array.length - 2)/2; i >= 0; i--) {
    downAdjust(array, i, array.length)
  }
}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

let array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];

upAdjust(array)

// output(array) // 1 3 2 6 0 7 8 9 10 5

buildHeap(array)

// output(array) // 0 1 2 6 3 7 8 9 10 5
