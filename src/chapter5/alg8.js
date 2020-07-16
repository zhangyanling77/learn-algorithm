/** 
 * 面试中的算法
 * 
 * 8、删去k个数字后的最小值
 * 
 * 问题：给出一个整数，从该整数中去掉k个数字，要求剩下的数字形成的新整数尽可能小，应该如何选择被去掉的数字？
 * 其中，整数的长度大于或等于k
 * 通过依次求得局部最优解，最终得到全局最优解的思想，叫做 “贪心算法” 。
*/

function removeKDigits_V1(num, k) {
  let numbers = String(num);
  for (let i = 0; i < k; i++) {
    let hasCut = false;
    // 从左到右遍历，找到比自己右侧数字大的数字并删除
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers.charAt(j) > numbers.charAt(j+1)) {
        numbers = numbers.substring(0, j) + numbers.substring(j+1, numbers.length);
        hasCut = true;
        break;
      }
    }
    // 如果没有找到要删除的数字，则删除最后一个数字
    if (!hasCut) {
      numbers = numbers.substring(0, numbers.length - 1);
    }
  }
  // 清除整数左侧的数字0
  let start = 0;
  for (let j = 0; j < numbers.length; j ++) {
    if (numbers.charAt(j) != '0') {
      break;
    }
    start++;
  }
  numbers = numbers.substring(start, numbers.length);
  // 如果整数的所有数字都被删除，返回0
  if (numbers.length === 0) {
    return '0'
  }
  return numbers
}

// 优化版  解决问题：1.删除一个数字后停在删除的位置，不需要再从头遍历比较 2.substring方法的时间复杂度为 O(n)，本身性能不够高

function removeKDigits(num, k) {
  let numbers = String(num);
  // 新整数的最终长度 = 原数组长度 - k
  let newLength = numbers.length - k;
  // 创建一个栈，用于接收所有的数字
  let stack = new Array(newLength);
  let top = 0;
  for (let i = 0; i < numbers.length; ++i) {
    // 遍历当前的数字
    let c = numbers.charAt(i);
    // 当栈顶数字大于遍历到的当前数字时，栈顶数字出栈
    while (top > 0 && stack[top - 1] > c && k > 0) {
      top--;
      k--;
    }
    // 遍历到的当前数字入栈
    stack[top++] = c;
  }
  // 找到栈中第一个非0的位置，以此构建新的整数字符串
  let offset = 0;
  while (offset < newLength && stack[offset] == '0') {
    offset++;
  }
  return offset == newLength ? '0' : getString(stack, offset, newLength - offset)
}

function getString(array, offset, end) {
  return array.reduce((acc, curr, index) => {
    if (index >= offset && index < end) {
      acc += curr
    }
    return acc
  }, '')
}

console.log(removeKDigits(1593212, 3)) // 1212
console.log(removeKDigits(30200, 1)) // 200
console.log(removeKDigits(10, 2)) // 0
console.log(removeKDigits(541270936, 3)) // 120936

console.log(removeKDigits(15932, 3))
