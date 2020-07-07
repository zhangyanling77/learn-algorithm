/** 
 * 面试中的算法
 * 
 * 4、如何判断一个数是否为2的整数次幂
 * 
 * 问题：实现一个方法，来判断一个正整数是否是2的整数次幂，要求性能尽可能高。
*/

// 方式一，利用中间变量 时间复杂度 O(logn)
function isPowerOf2_V1(num) {
  let temp = 1;
  while(temp <= num) {
    if (temp === num) {
      return true
    }
    temp = temp * 2 // => 可替换移位操作 temp = temp<<1
  }
  return false
}

console.log(isPowerOf2_V1(32)) // true
console.log(isPowerOf2_V1(19)) // false

// 方式二，将值转为二进制，通过原数值与它减1的结果按位与看是不是0。 时间复杂度只有 O(1)
function isPowerOf2_V2(num) {
  return (num & (num - 1)) === 0;
}

console.log(isPowerOf2_V2(32)) // true
console.log(isPowerOf2_V2(19)) // false
