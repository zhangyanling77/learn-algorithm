/** 
 * 排序算法
 * 桶排序
 * 
 * 区间跨度 = （最大值 - 最小值）/ （桶的数量 - 1）
*/

function bucketSort(array) {
  // 得到数列的最大值和最小值，并计算出差值d
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
    if (array[i] < min) {
      min = array[i]
    }
  }
  let d = max - min; // 差值

  // 2.初始化桶
  let bucketNum = array.length; // 桶的个数
  let range = d / (bucketNum - 1); // 区间
  let listArray = []; // 按编号存放
  
  // 3.遍历原始数列，将每个元素放入桶中
  for (let i = 0; i < array.length; i++) {
    // 计算桶的编号
    let index = Math.floor((array[i] - min) / range);
    // 4.对每个桶内部进行排序   判断桶里面是否已经有值了，有值则进行排序
    if (listArray[index]) { 
      // 获取桶的最后一个值的下标
      let last = listArray[index].length - 1;
      // 桶最后的值要大于插入的值，所以将这个值插入到桶的前面，此时需要进行排序
      while (last > 0 && listArray[index][last] > array[i]) {
        // 桶前面的数字放到后面去
        listArray[index][last + 1] = listArray[index][last]
        last--;
      }
      // 不用排序的直接加到桶的后面
      listArray[index][last + 1] = array[i];
    } else {
      listArray[index] = [];
      listArray[index][0] = array[i]
    }
  }

  // 5.输出全部元素
  let num = 0;
  let sortedArray = [];
  while (num < bucketNum) {
    if (listArray[num]) {
      sortedArray = sortedArray.concat(listArray[num])
    }
    num++;
  }
  return sortedArray;

}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

const array = [4.12, 6.421, 0.0023, 3.0, 2.123, 8.122, 4.12, 10.09];
const sortArray = bucketSort(array);

output(sortArray) // 0.0023 2.123 3.0 4.12 4.12 6.421 8.122 10.09
