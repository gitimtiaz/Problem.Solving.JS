//Generate a random number between 10 to 20.

function generateRandom(){
    const number= Math.floor(Math.random()*11)+10;
    return number;
}


console.log("The random number is: ",generateRandom())