/** 
 * 排序算法
 * 冒泡算法
*/

// 1.基础版
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      let tmp = 0;
      if (array[j] > array[j+1]) {
        tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
      }
    }
  }
}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

const array = [5, 8, 6, 3, 9, 2, 1, 7];

// bubbleSort(array)

// output() // 1 2 3 5 6 7 8 9

// 2.优化版1  对已经有序的做上标记
function bubbleSort1(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // 有序标记，每一轮的初始值都是true
    let isSorted = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      let tmp = 0;
      if (array[j] > array[j+1]) {
        tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
        // 因为发生了元素交换，所以不是有序的
        isSorted = false
      }
    }
    if (isSorted) {
      break;
    }
  }
}

// bubbleSort1(array)

// output() // 1 2 3 5 6 7 8 9

// 3.优化版2 确定数列的有序区
function bubbleSort2(array) {
  // 记录最后一次交换的位置
  let lastExchangeIndex = 0;
  // 无序数列的边界，每次比较都只需比到此处为止
  let sortBorder = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    // 有序标记，每一轮的初始值都是true
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      let tmp = 0;
      if (array[j] > array[j+1]) {
        tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
        // 因为发生了元素交换，所以不是有序的
        isSorted = false
        lastExchangeIndex = j
      }
    }
    sortBorder = lastExchangeIndex;
    if (isSorted) {
      break;
    }
  }
}

// bubbleSort2(array)

// output(array) // 1 2 3 5 6 7 8 9

// 4.最优版 鸡尾酒排序  该算法中，元素比较和交换的过程是双向的。第一轮从左往右，
// 第二轮从右往左，第三轮从左往右...
function sort(array) {
  let tmp = 0;
  for (let i = 0; i < array.length/2; i++) {
    let isSorted = true;
    // 奇数轮，从左向右比较和交换
    for (let j = i; j < array.length - 1 - i; j++) {
      if (array[j] > array[j+1]) {
        tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
        // 因为发生了元素交换，所以不是有序的
        isSorted = false
      }
    }
    if (isSorted) {
      break;
    }
    // 在偶数轮之前将isSorted标记置为true
    isSorted = true;
    // 偶数轮，从右向左比较和交换
    for (let j = array.length - 1 - i; j > i; j--) {
      if (array[j] < array[j - 1]) {
        tmp = array[j]
        array[j] = array[j-1]
        array[j-1] = tmp
        // 因为发生了元素交换，所以不是有序的
        isSorted = false
      }
    }
    if (isSorted) {
      break;
    }
  }
}

const array2 = [2, 3, 4, 5, 6, 7, 8, 1]

sort(array2)

output(array2) // 1 2 3 4 5 6 7 8
