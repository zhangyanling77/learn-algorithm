/** 
 * 算法的实际应用
 * 
 * Bitmap的巧用
*/
class MyBitmap {
  constructor(size) {
    // Bitmap位数大小
    this.size = size;
    // 其中的每个word都是一个long型元素，对应一个64位二进制数据
    this.words = new Array(this.getWordIndex(size - 1) + 1);
  }
  // 定位Bitmap某一位对应的word
  getWordIndex(bitIndex) {
    // 右移6位，相当于除以64
    return bitIndex >> 6
  }
  // 判断Bitmap某一位的状态 bitIndex表示位图的第bitIndex位
  getBit(bitIndex) {
    if (bitIndex<0 || bitIndex > this.size - 1) {
      throw new Error('超出Bitmap的有效范围！')
    }
    let wordIndex = this.getWordIndex(bitIndex);
    return (this.words[wordIndex] & (1 << bitIndex)) !== 0;
  }
  // 把Bitmap某一位设置为true
  setBit(bitIndex) {
    if (bitIndex<0 || bitIndex > this.size - 1) {
      throw new Error('超出Bitmap的有效范围！')
    }
    let wordIndex = this.getWordIndex(bitIndex);
    this.words[wordIndex] |= (1 << bitIndex)
  }
}

let bitmap = new MyBitmap(128);
bitmap.setBit(126);
bitmap.setBit(75);
console.log(bitmap.getBit(126)); // true
console.log(bitmap.getBit(78)); // false
