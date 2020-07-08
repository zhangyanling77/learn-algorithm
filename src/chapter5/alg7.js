/** 
 * 面试中的算法
 * 
 * 7、寻找全排列的下一个数
 * 
 * 问题：给出一个正整数，找出这个正整数所有数字全排列的下一个数。
 * 通俗说，就是在一个整数所包含数字的全部组合中，找到一个大于且仅大于原数的新整数。
 * 如，输入12345，输出12354；输入12354，输出12435；输入12435，输出12453...
*/

function findNearestNumber(numbers) {
  // 1.从后向前查看逆序区域，找到逆序区域的前一位，也就是数字置换的边界
  let index = findTransferPoint(numbers);
  // 如何数字置换边界为0，说明整个数组已经逆序，无法得到更大的相同数字组成的整数，返回null
  if (index === 0) {
    return null;
  }
  // 2.把逆序区域的前一位和逆序区域中刚刚大于它的数字交换位置
  // 复制并入参，避免直接修改入参
  let numbersCopy = numbers;
  exchangeHead(numbersCopy, index);
  // 3.把原来的逆序区域转为顺序
  reverse(numbersCopy, index)
  return numbersCopy;
}

function findTransferPoint(numbers) {
  for (let i = numbers.length - 1; i > 0; i--) {
    if (numbers[i] > numbers[i - 1]) {
      return i
    }
  }
  return 0;
}

function exchangeHead(numbers, index) {
  let head = numbers[index - 1];
  for (let i = numbers.length - 1; i > 0; i++) {
    if (head < numbers[i]) {
      numbers[index - 1] = numbers[i];
      numbers[i] = head;
      break;
    }
  }
  return numbers;
}

function reverse(numbers, index) {
  for (let i = index, j = numbers.length - 1; i < j; i++, j--) {
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }
  return numbers;
}

let numbers = [1,2,3,4,5];
for (let i = 0; i < 10; i++) {
  numbers = findNearestNumber(numbers);
  console.log(numbers.join('')) // 12354 12435 12453
}
