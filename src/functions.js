function converter(){
    var binary=document.getElementById("Binary").value;
    var sum=0;
    var scale=testNumber(binary);
    for (let i = 0; i < scale; i++){
        var element = binary[i]*2**((scale-1)-i);  
        sum += element;
    }
   document.getElementById("Decimal").value=sum;
}   

function testNumber(number){
    var scale=0;
    for (let i = 0; i < number.length; i++) {
        if (number[i]!=1 && number[i]!=0) {
            window.alert("Please, enter a binary number")
            break
        }else{
            scale+=1
        }
    }
    return scale;

}