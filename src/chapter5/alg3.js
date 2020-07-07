/** 
 * 面试中的算法
 * 
 * 3、如何求出最大公约数
 * 
 * 问题：求出两个整数的最大公约数，要尽量优化算法的性能。
 * 
 * 什么是最大公约数？
 * 指两个或多个整数共有约数中最大的一个，求最大公约数有多种方法，常见的有【质因数分解法】、【短除法】、【辗转相除法】、【更相减损法】。
*/

// 【辗转相除法】
function getGreatestCommonDivisorV2(a, b) {
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  if (big % small === 0) {
    return small;
  }
  return getGreatestCommonDivisorV2(big%small, small);
}

console.log(getGreatestCommonDivisorV2(25, 5)) // 5
console.log(getGreatestCommonDivisorV2(100, 80)) // 20
console.log(getGreatestCommonDivisorV2(27, 14)) // 1

//【更相减损法】
function getGreatestCommonDivisorV3(a, b) {
  if (a === b) {
    return a;
  }
  let big = a > b ? a : b;
  let small = a < b ? a : b;
  return getGreatestCommonDivisorV3(big-small, small)
}

console.log(getGreatestCommonDivisorV3(25, 5)) // 5
console.log(getGreatestCommonDivisorV3(100, 80)) // 20
console.log(getGreatestCommonDivisorV3(27, 14)) // 1

// 结合【辗转相除法】 和 【更相减损法】，在【更相减损法】基础上使用移位运算。
function getGreatestCommonDivisor(a, b) {
  if (a === b) {
    return a;
  }
  if ((a & 1) ===0 && (b & 1) === 0) { // a、b均为偶数
    return getGreatestCommonDivisor(a>>1, b>>1)<<1;
  } else if ((a & 1)===0 && (b & 1) !== 0) { // a偶 b奇
    return getGreatestCommonDivisor(a>>1, b)
  } else if ((a & 1) !==0 && (b & 1) === 0) { // a奇 b偶
    return getGreatestCommonDivisor(a, b>>1)
  } else { // a、b均为奇数
    let big = a > b ? a : b;
    let small = a < b ? a : b;
    return getGreatestCommonDivisor(big-small, small)
  }
}

console.log(getGreatestCommonDivisor(25, 5)) // 5
console.log(getGreatestCommonDivisor(100, 80)) // 20
console.log(getGreatestCommonDivisor(27, 14)) // 1
