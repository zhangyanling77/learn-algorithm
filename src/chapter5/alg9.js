/** 
 * 面试中的算法
 * 
 * 9、如何实现大整数相加
 * 
 * 问题：给出两个很大的整数，要求实现程序求出两个整数之和。
*/

function bigNumber(bigNumA, bigNumB) {
  let bigNumberA = String(bigNumA);
  let bigNumberB = String(bigNumB);
  // 1.创建两个数组，数组长度为较大整数的位数+1。把每一个整数倒序存储到数组中。
  let maxLength = bigNumberA.length > bigNumberB.length ?  bigNumberA.length : bigNumberB.length;
  let arrayA = new Array(maxLength+1).fill(0);
  for (let i = 0; i < bigNumberA.length; i++) {
    arrayA[i] = bigNumberA.charAt(bigNumberA.length - 1 - i) - '0';
  }
  let arrayB = new Array(maxLength+1).fill(0);
  for (let i = 0; i < bigNumberB.length; i++) {
    arrayB[i] = bigNumberB.charAt(bigNumberB.length - 1 - i) - '0';
  }
  // 2.构建result数组，长度位较大整数的位数+1
  let result = new Array(maxLength+1).fill(0);
  // 3.遍历数组，按位相加
  for (let i = 0; i < result.length; i++) {
    let temp = result[i];
    temp += arrayA[i];
    temp += arrayB[i];
    // 判断是否进位
    if (temp >= 10) {
      temp = temp - 10;
      result[i+1] = 1;
    }
    result[i] = temp;
  }
  // 4.把result数组再次逆序并转成string
  // 是否找到大整数的最高有效位
  let str = ''
  let findFisrt = false;
  for (let i = result.length - 1; i >= 0; i--) {
    if (!findFisrt) {
      if (result[i] == '0') {
        continue;
      }
      findFisrt = true;
    }
    str += result[i]
  }
  return str
}

console.log(bigNumber(426709752318, 95481253129)) // 522191005447
