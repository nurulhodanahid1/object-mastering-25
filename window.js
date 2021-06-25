var name = "Kaman";
function add(num1, num2) {
    console.log(name);
    var result = num1 + num2;    // var die na lekhle eta global variabe hoe jabe;                                                 
    // return result;            // window.result dielo global variable hoe jabe;                               
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
// console.log(result);   // var na dielo error dibe eta global hour agei call hoe jai
var sum = add(10, 20);
console.log(sum);
console.log(result);      // ekhane error dibe na