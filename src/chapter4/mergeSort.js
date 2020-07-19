/** 
 * 排序算法
 * 归并排序
 * 
 * 归并排序采用的是分治的思想，首先是“分”，将一个数组反复二分为两个小数组，直到每个数组只有一个元素；
 * 其次是“治”，从最小数组开始，两两按大小顺序合并，直到并为原始数组大小
 * 时间复杂度为 O(nlogn)
*/

function mergeSort (arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len/2);
  //拆分成两个子数组
  let left =  arr.slice(0, middle);
  let right = arr.slice(middle,len);
  //递归拆分
  let mergeSortLeft = mergeSort(left);
  let mergeSortRight = mergeSort(right);
  //合并
  return merge(mergeSortLeft,mergeSortRight);
}

const merge = (left, right) => {
  const result = []; // 结果数组

  while (left.length && right.length) {
    // 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift()); // 每次都删除left或者right的第一个元素，将其加入result中
    } else {
      result.push(right.shift());
    }
  }
  // 将剩下的元素加上
  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
};

const array = [5, 8, 6, 3, 9, 2, 1, 7];

console.log(mergeSort(array)) // [1, 2, 3, 5, 6, 7, 8, 9]