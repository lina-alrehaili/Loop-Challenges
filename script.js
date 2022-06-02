function printOdd(){
    console.log("Print odds 1-20 ");
    for (let i = 1; i <= 20; i++) { 
        if(i%3==0)
            console.log(i);
    }   
}
printOdd();

function decrementMulti3(){
    console.log("Decreasing Multiples of 3");
    for (let i = 100; i >= 0; i--) { 
        if(i%3==0)
            console.log(i);
    }   
}
decrementMulti3();

function printSeq(){
    var x=4;
    console.log("Print the sequence 4, 2.5, 1, -0.5, -2, -3.5.");
    console.log(x);
    for (let i = 1; i <= 5; i++) { 
        x=x-1.5;
        console.log(x);
    } 
}
printSeq();

function Sigma(){
    var sum=0;
    console.log("sigma from 1 to 100");
    for (let i = 1; i <= 100; i++) { 
        sum=(sum+i);
    } 
    console.log(sum);
}
Sigma();

function Factorial(){
    var product =1;
    console.log("Factorial from 1 to 12");
    for (let i = 1; i <= 12; i++) { 
        product =(product *i);
    } 
    console.log(product );
}
Factorial();