var x = 5;
    
function setX(newValue) {
    x = newValue; //5
}
    
console.log(x);//5
setX(15);
console.log(x);//15



var x = 5;
    
function addToX(amount) {
    return x + amount; //5 + amount;
    console.log("hello there");
}
console.log(x);//5
var result = addToX(-10);
console.log(result); //5 + -10 = -5; 
console.log(x); // 5

// 5 , -5, 5



function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { // 5/2 = 2.5
        var right = arr.length-1-left; // arr.length -1 ( so value is at the last index) - left (value which is start at 0 and counting up)
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);