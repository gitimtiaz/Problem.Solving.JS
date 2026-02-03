//Convert celsius to fahrenheit
//simple

let c="-37";
console.log(c+"\xB0C converts to Fahrenheit: ",(c*9/5+32).toFixed(2)+"\xB0F");

//using function
function convertCtoF(cel){
    return parseFloat(cel)*9/5+32;
}
let celc=-40;

console.log(celc+"\xB0C converts to Fahrenheit: ",convertCtoF(celc).toFixed(2)+"\xB0F");