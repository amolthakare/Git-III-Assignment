var num;
function Prime(num){
    var count=0;
    for(var i=1;i<num;i++){
        if(num%i==0){
            count++;
        }
    }

    if(count==2){
        console.log(num+" "+"is prime");
    }
    else{
        console.log(num+" "+"is not prime");
    }
}

Prime(10);