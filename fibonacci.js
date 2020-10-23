
function fibonacciGenerator (n) {
    var totalNumbers = []; // store nth number of fibonacci numbers in an array; 
    var l = 0;
    var m = 0;
    var total = 1;

    var count = 0;
    while (count <= n){
    totalNumbers.push(m);
    l = m + total;
    m = total;
    total = l;
    count++;
    }
return totalNumbers; 

}

//use this to test the function
// fibonacciGenerator(0);