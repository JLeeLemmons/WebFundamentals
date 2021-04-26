//1
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]); 
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//While Loop
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    var i = 0; 
    while(i < arr.length){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]); 
        }
        i++;
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//#2
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            totalOdds = totalOdds + arr[i]; 
    }
    else if(arr[i] % 2 != 1){
        totalEvens = totalEvens + arr[i]; 
        }
    }
    if(totalOdds > totalEvens){
        console.log("odds are larger");
    }
    else if(totalEvens > totalOdds){
        console.log("evens are larger");
    }
    else{
        console.log("tied"); 
}

}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"


//#3 // This is incorrect, need to better understand. 
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]; 
    }
    var avg = sum / arr.length; 
    console.log(avg); 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count ++;
        }
    }
    return count;  
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



//#4
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var past = 0; 
    var present = 1; 
    var next; 
    var count = 2; 
    while(count <= n){
        next = past + present; 
        fibArr.push(next); 
        past = present; 
        present = next; 
        count++; 
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);