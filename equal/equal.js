const str = "123";
let total = 0;

console.time('Testcase 1');
for (let i = 0; i < 100000; i++) {
    if (str == "123") {
        total++;
    }
}
console.log('Total : ' + total);
total = 0;
console.timeEnd('Testcase 1');

console.time('Testcase 2');
for (let i = 0; i < 100000; i++) {
    if (str === "123") {
        total++;
    }
}
console.log('Total : ' + total);
total = 0;
console.timeEnd('Testcase 2');

console.log('Performance Comparison : Testcase 1 < Testcase 2');