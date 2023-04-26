const inputNumbers = document.querySelectorAll(".number")

inputNumbers.forEach(input => input.addEventListener("blur", convertNumber))

inputNumbers.forEach(input => input.addEventListener("focus", () => {
    document.getElementById("Binary").value='';
    document.getElementById("Decimal").value='';
}))

function convertNumber(event){
    const base = event.target
    if (base.name === "Binary") {
        convertNumberBinary(base.value)
    } else {
        convertNumberDecimal(base.value)
    }
}

function convertNumberDecimal(decimal) {
    let binary = []
    decimal = Number.parseInt(decimal) 
    if (!decimal) {
        window.alert("Please, enter a Decimal number")
    }
    while (decimal >= 1) {
        let resto = decimal% 2
        binary.unshift(Math.trunc(resto))
        decimal/=2
    }
    document.getElementById("Binary").value=binary.join('');
    
}

function convertNumberBinary(binary){
    let sum = 0;
    const isBinary = testNumberBinary(binary);
    if (isBinary) {     
        for (let i = 0; i < binary.length; i++){
            let element = binary[i] *2**((binary.length-1)-i);  
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