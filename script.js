
// Print odds 1-20

for(i=1 ; i<20 ;) {
    console.log(i);
    i += 2 ;
}

// Decreasing Multiples of 3

for(i=100; i>0 ; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Print the sequence

for(i=4 ; i>-4; ){
    console.log(i);
    i-=1.5;
}

// Sigma

var sum = 0;

for(i=1; i<=100; i++){
    
    sum = sum + i;
}

console.log(sum);

// Factorial

var product = 1;

for(i=1; i<=12; i++){
    product = product * i;
}

console.log(product);

