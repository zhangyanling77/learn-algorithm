/** 
 * 面试中的算法
 * 
 * 5、无序数组排序后的最大相邻差
 * 
 * 问题：有一个无序整型数组，如何求出该数组排序后的任意两个相邻元素的最大差值。要求时间和空间复杂度尽可能低。
*/

class Bucket {
  constructor() {
    this.min = null;
    this.max = null;
  }
}

function getMaxSortedDistance(array) {
  // 1.得到数列的最大值和最小值
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let d = max - min;
  // 如果max和min相等，说明数组的所有元素都相等，返回0
  if (d === 0) {
    return 0;
  }
  // 2.初始化桶
  let bucketNum = array.length; // 桶个数
  let range = d / (bucketNum - 1); // 区间
  let buckets = new Array(bucketNum);
  for (let i = 0; i < bucketNum; i++) {
    buckets[i] = new Bucket();
  }
  // 3.遍历原数组，确定每个桶的最大值和最小值
  for (let i = 0; i < array.length; i++) {
    // 确定数组元素所归属的桶下标 min为偏移量
    let index = Math.floor((array[i] - min) / range);
    if (buckets[index].min === null || buckets[index].min > array[i]) {
      buckets[index].min = array[i]
    }
    if (buckets[index].max === null || buckets[index].max < array[i]) {
      buckets[index].max = array[i]
    }
  }
  // 4.遍历桶，找到最大差值
  let leftMax = buckets[0].max;
  let maxDistance = 0;
  for (let i = 1; i < buckets.length; i++) {
    if (buckets[i].min === null) {
      continue;
    }
    if (buckets[i].min - leftMax > maxDistance) {
      maxDistance = buckets[i].min - leftMax
    }
    leftMax = buckets[i].max
  }

  return maxDistance;
}

const array = [2, 6, 3, 4, 5, 10, 9];
console.log(getMaxSortedDistance(array)); // 3
