let num;
function Prime(num){
    let count=0;
    for(let i=2;i<num;i++){
        if(num%i===0){
            count++;
        }
    }
    if(count>0){
        console.log(num+" "+"is prime");
    }
    else{
        console.log(num+" "+"is not prime");
    }
}

Prime(77);
