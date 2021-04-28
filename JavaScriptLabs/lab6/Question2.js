

console.log('Question2: printing numbers from to after every seconds:');
function printNumbers(from, to){
        
    if(from<=to){
    console.log(from);
    from++;
    setTimeout(printNumbers,1000,from,to);
    }
}
printNumbers(1,5);

