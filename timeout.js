function doSomething() {
    console.log(2222);
}
console.log(1111);
setTimeout(() => {
    doSomething();
}, 1000);
setTimeout(() => {               // joto code thakbe sob run hoar por setTimeout And setInterval cholbe;
    console.log(5555);
}, 2000);
setTimeout(function(){
    console.log(6666);
}, 3000);

// interval
setInterval(() => {
    console.log("doing id again and again!!!");
}, 4000);
console.log(3333);
console.log(4444);