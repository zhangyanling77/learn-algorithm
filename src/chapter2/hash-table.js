/** 
 * 数据结构基础
 * 哈希表
*/

class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  // 散列函数
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
  }
  // 写入数据
  put(data) {
    let pos = this.simpleHash(data);
    this.table[pos] = data;
  }
  
  output() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
          console.log(i + ": " + this.table[i]);
      }
    }
  }
}

let hashtable = new HashTable();

let someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

for (let i = 0; i < someNames.length; ++i) {
  hashtable.put(someNames[i]);
}

hashtable.output()
/** 
Hash value: David -> 488
Hash value: Jennifer -> 817
Hash value: Donnie -> 605
Hash value: Raymond -> 730
Hash value: Cynthia -> 720
Hash value: Mike -> 390
Hash value: Clayton -> 730
Hash value: Danny -> 506
Hash value: Jonathan -> 819
35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonathan
*/