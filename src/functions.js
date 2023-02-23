const button = document.getElementById("button");
const inputNumbers = document.querySelectorAll(".number")

button.addEventListener("click", convertNumberBinary)

inputNumbers.forEach(input => input.addEventListener("blur", convertNumber))

function convertNumber(event){
    const base = event.target
    if (base.name === "Binary") {
        convertNumberBinary(base)
    } else {
        console.log("decimal");
    }
}



function convertNumberBinary(element){
    const binary=element.value;
    let sum = 0;
    const isBinary = testNumberBinary(binary);
    if (isBinary) {     
        for (let i = 0; i < binary.length; i++){
            let element = binary[i]*2**((binary.length-1)-i);  
            sum += element;
        }
    }
   document.getElementById("Decimal").value=sum;
}   

function testNumberBinary(number){
    let isBinary = true
    for (const element of number) {
        if (element!=1 && element!=0) {
            window.alert("Please, enter a binary number")
            isBinary = false
            break
        }
    }
    return isBinary;

}