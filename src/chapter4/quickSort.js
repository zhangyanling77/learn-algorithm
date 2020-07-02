/** 
 * 排序算法
 * 快速排序
*/

function quickSort(arr, startIndex, endIndex) {
  // 递归结束的条件: startIndex >= endIndex
  if (startIndex >= endIndex) {
    return;
  }
  // 得到基准元素的位置
  // let pivotIndex = partition(arr, startIndex, endIndex);
  let pivotIndex = partition2(arr, startIndex, endIndex);
  // 根据基准元素，分成两部分进行递归排序
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
}

/**
 * 分治（双边循环）
 * arr 待交换的数组
 * startIndex 起始下标
 * endIndex 结束下标
 */
function partition(arr, startIndex, endIndex) {
  // 取第一个位置（也可以随机选择位置）的元素作为基准元素
  let pivot = arr[startIndex];
  let left = startIndex;
  let right = endIndex;

  while (left !== right) {
    // 控制right指针比较并左移
    while (left < right && arr[right] > pivot) {
      right--;
    }
    // 控制left指针比较并右移
    while (left < right && arr[left] <= pivot) {
      left++;
    }
    // 交换left和right指针所指向的元素
    if (left < right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
    }
  }

  // pivot和指针重合点交换
  arr[startIndex] = arr[left]; // ? 不理解
  arr[left] = pivot;

  return left;
}

/**
 * 分治（单边循环）
 * arr 待交换的数组
 * startIndex 起始下标
 * endIndex 结束下标
 */
function partition2(arr, startIndex, endIndex) {
  // 取第一个位置（也可随机选择位置）的元素作为基准元素
  let pivot = arr[startIndex];
  let mark = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++;
      let tmp = arr[mark];
      arr[mark] = arr[i];
      arr[i] = tmp;
    }
  }

  arr[startIndex] = arr[mark];
  arr[mark] = pivot;
  return mark;
}

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}


const array = [4, 4, 6, 5, 3, 2, 8, 1];

quickSort(array, 0, array.length - 1);

output(array) // 1 2 3 4 4 5 6 8
