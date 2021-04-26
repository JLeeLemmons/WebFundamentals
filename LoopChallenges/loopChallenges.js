//#1 For Loop
for(var i = 1; i <= 20; i++){
    if(i % 2 == 1){
        console.log(i); 
    }
}
//#1 While loop
var i = 1; 
while(i <= 20){
    if(i % 2 == 1){
        console.log(i);
    }
    i++; 
}

//#2
for(var i = 4; i >= -3.5; i-=1.5){
    console.log(i); 
}
// While loop 
var i = 4;
while( i >= -3.5){
    console.log(i);
    i-=1.5;
}
//#3
var sum = 0;
for(var i = 1; i <101; i++){
    sum = sum + i; 
}
console.log(sum); 
// While loop
var sum = 0; 
var i = 0; 
while(i < 101){
    sum = sum + i; 
    i++;
}
console.log(sum); 

//#4 
var n = 1; 
for(var i =1; i < 100000000; i++){
    n = n * i;   
}
console.log(n); 

//while loop
var n =1; 
var i = 1; 
while (i < 10000000){
    n = n * i; 
    i++;
}
console.log(n); 