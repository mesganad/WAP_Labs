

//Question3: 
/* The scheduled setTimeOut call will be executed after the loop. Because the setTimeOut task will be in
the waiting state at callback queue until the loop is over. And the alert pops up 100000000. */

console.log('Question3: synchronious tasks has priority on the asynchronious ones: But here the problem is fixed by scheduling: ')
let i=0;
setTimeout(()=>console.log(i),100);
//assume that the time to execute this function is >100ms
setInterval(()=>{
    for(let j=0;j<100000000;j++){
    i++;
}
},200);



