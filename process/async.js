setTimeout(() => {
    console.log(0);
}, 0);

new Promise(res => res()).then(() => console.log(1))

setImmediate(() => {
    console.log(2);
});

process.nextTick(() => {
    console.log(3);
});

console.log(4);

console.log('Processing Sequence : Global -> process.nextTick -> promise.then -> setTimeout -> setImmediate');