/** 
 * 排序算法
 * 计数排序
*/

function countSort(array) {
  // 1.得到数列的最大值
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  // 2.根据数列最大值确定统计数组的长度
  let countArray = new Array(max + 1);
  countArray.fill(0);
  // 3.遍历数组填充统计数组
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }
  // 4.遍历统计数组，输出结果
  let index = 0;
  let sortedArray = new Array(array.length);
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray[index++] = i
    }
  }
  return sortedArray;
}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

const array = [4, 4, 6, 5, 3, 2, 8, 1, 7, 5, 6, 0, 10];
let sortArray = countSort(array);

output(sortArray)
