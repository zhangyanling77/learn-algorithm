/** 
 * 面试中的算法
 * 
 * 10、如何求解金矿问题
 * 
 * 这是一个典型的 “动态规划” 题目，和著名的 “背包问题” 类似。
 * 所谓动态规划，就是把复杂的问题简化成规模较小的子问题，再从简单的子问题自底向上一步一步递推，最终得到复杂问题的最优解。
 * 
 * 问题：一位国王拥有5座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人人数也不同。
 * 例如，黄金储量为500kg，需要5个工人挖；黄金储量为400kg，需要5人；黄金储量为350kg，需要3人；
 * 黄金储量为300kg，需要4人；黄金储量为200kg，需要3人。总共10名工人。
 * 每座金矿要么全挖，要么不挖，不可以只派出一半人挖一半的金矿，那么想要得到足够多的黄金，应该选择挖取哪几座金矿？
*/

/**
 * 获得金矿最优收益 二维数组
 * @param {*} w 工人数量
 * @param {*} p 金矿开采所需工人的数量 数组
 * @param {*} g 金矿含金量 数组
 */
function getBestColdMining(w, p, g) {
  // 创建二维数组
  let resultTable = new Array(g.length+1);
  for (let i = 0; i < g.length+1; i++) {
    resultTable[i] = new Array(w+1).fill(0);
  }
  // 填充
  for (let i = 1; i <= g.length; i++) {
    for (let j = 1; j <= w; j++) {
      if (j < p[i-1]) {
        resultTable[i][j] = resultTable[i-1][j]
      } else {
        resultTable[i][j] = Math.max(resultTable[i-1][j], resultTable[i-1][j-p[i-1]]+g[i-1])
      }
    }
  }
  // 返回最后一个格子的值
  return resultTable[g.length][w];
}

let w = 10;
let p = [3, 4, 3, 5, 5];
let g = [200, 300, 350, 400, 500];
console.log(getBestColdMining(w, p, g)) // 900

/**
 * 优化
 */

function getBestColdMining_V2(w, p, g) {
  let result = new Array();
  for (let i = 0; i < w + 1; i++) {
    result[i] = i
  }
  // 填充
  for (let i = 1; i <= g.length; i++) {
    for (let j = w; j >= 1; j--) {
      if (j >= p[i-1]) {
        let x = p[i-1];
        result[j] = Math.max(result[j], result[j - x] + g[i-1])
      }
    }
  }
  // 返回最后一个格子的值
  return result[w];
}

// console.log(getBestColdMining_V2(w, p, g)) // 900
