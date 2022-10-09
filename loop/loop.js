const testArray = Array.from({ length: 100000 }, () => 1);
const cachedTestArrayLength = testArray.length;
let total = 0;

console.time('Testcase 1');
testArray.forEach(el => {
    total += el;
});
console.log('Total : ' + total);
total = 0;
console.timeEnd('Testcase 1');

console.time('Testcase 2');
for (let i = 0; i < testArray.length; i++) {
    total += testArray[i];
}
console.log('Total : ' + total);
total = 0;
console.timeEnd('Testcase 2');

console.time('Testcase 3');
for (let i = 0; i < cachedTestArrayLength; i++) {
    total += testArray[i];
}
console.log('Total : ' + total);
total = 0;
console.timeEnd('Testcase 3');

console.log('Performance Comparison : Testcase 1 < Testcase 2 < Testcase 3');