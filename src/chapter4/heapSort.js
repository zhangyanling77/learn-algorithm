/** 
 * 排序算法
 * 堆排序
*/

/**
 * “下沉”调整
 * array 待调整的堆
 * parentIndex 要“下沉”的父节点
 * length 堆的有效大小
 */
function downAjust(array, parentIndex, length) {
  // temp保存父节点值，用于最后的赋值
  let temp = array[parentIndex];
  let childIndex = 2 * parentIndex + 1;
  while (childIndex < length) {
    // 如果有右孩子，并且右孩子大于左孩子的值，则定位到右孩子
    if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
      childIndex++;
    }
    // 如果父节点大于任何一个孩子的值，则跳出循环
    if (temp >= array[childIndex]) {
      break;
    }
    // 单向赋值
    array[parentIndex] = array[childIndex]
    parentIndex = childIndex
    childIndex = 2 * childIndex + 1
  }
  array[parentIndex] = temp
}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

/**
 * 堆排序
 * @param {*} array 待调整的堆
 */
function heapSort(array) {
  // 1.把无序数组构建成最大堆
  for (let i = (array.length - 2)/2; i >= 0; i--) {
    downAjust(array, i, array.length)
  }
  output(array)
  // 2.循环删除堆顶元素，移到集合尾部，调整堆产生新的堆
  for (let i = array.length; i > 0; i--) {
    // 最后一个元素和第一个元素交换
    let temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    // 下沉调整最大堆
    downAjust(array, 0, i)
  }
}

const array = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];

heapSort(array);

output(array) // 0 1 2 3 5 6 7 8 9 10
