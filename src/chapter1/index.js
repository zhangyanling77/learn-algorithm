/** 
 * 算法概述
*/

// 时间复杂度

// 场景1 T(n) = n 执行次数是线性的 O(n)
function eat1(n) {
  for(let i = 0; i < n; i++) {
    console.log("等待1分钟")
    console.log("等待1分钟")
    console.log("吃1cm面包")
  }
}

// eat1(2) // 结果打印2次

// 场景2 T(n) = logn 执行次数是用对数计算的

function eat2(n) {
  for(let i = n; i > 1; i /= 2) {
    console.log("等待1分钟")
    console.log("等待1分钟")
    console.log("等待1分钟")
    console.log("等待1分钟")
    console.log("吃一半面包")
  }
}

// eat2(9) // 结果打印4次
// eat2(5) // 结果打印3次
// eat2(3) // 结果打印2次

// 场景3 T(n) = 1，执行次数是常量
function eat3(n) {
  console.log("等待1分钟")
  console.log("吃一个鸡腿")
}

// eat3(2) // 无论传多少结果都只打印一次

// 场景4 T(n) = n^2
function eat4(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      console.log("等待1分钟")
    }
    console.log("吃1cm面包")
  }
}

eat4(4)
/** 
 * 结果如下：
吃1cm面包
等待1分钟
吃1cm面包
等待1分钟
等待1分钟
吃1cm面包
等待1分钟
等待1分钟
等待1分钟
吃1cm面包
*/