/** 
 * 算法的实际应用
 * 
 * 如何实现红包算法
*/

/**
 * 拆分红包
 * @param {*} totalAmount 红包总金额（以分为单位）
 * @param {*} totalPeopleNum 总人数
 */
function divideRedPackage(totalAmount, totalPeopleNum) {
  let amountList = []; // 存放拆分出来的红包金额
  let restAmount = totalAmount;
  let restPeopleNum = totalPeopleNum;
  for (let i = 0; i < totalPeopleNum - 1; i++) {
    // 随机范围：[1, 剩余人均金额的两倍 - 1]分
    let amount = Math.random() * (restAmount/restPeopleNum * 2 - 1) + 1;
    restAmount -= amount;
    restPeopleNum--;
    amountList.push(amount);
  }
  amountList.push(restAmount);
  return amountList;
}

let amountList = divideRedPackage(1000, 10);
for (let amount of amountList) {
  console.log('抢到红包金额：'+ amount.toFixed(2))
}

/**
抢到红包金额：165.49
抢到红包金额：101.35
抢到红包金额：155.18
抢到红包金额：108.10
抢到红包金额：86.86
抢到红包金额：27.96
抢到红包金额：75.29
抢到红包金额：165.98
抢到红包金额：46.04
抢到红包金额：67.75
 */
