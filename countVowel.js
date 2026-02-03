//Write a function to count the number of vowels in a string.

function countVowel(say){
    let count=0;
    for(let i=0; i<say.length; i++){
        if(say[i]==='a' || say[i]==='e' || say[i]==='i' || say[i]==='o' || say[i]==='u' || say[i]==='A' || say[i]==='E' || say[i]==='I' || say[i]==='O' || say[i]==='U') count++;
    }
    return count;
}

function countVowel2(said){
    let count=0;
    const vowels="aeiou";

    for(let char of said){
        if(vowels.includes(char.toLowerCase())) count++;
    } 
    return count;
}

function countVowel3(says){
    const found=says.match(/[aeiou]/gi);
    return found ? found.length : 0;
}


const say="gg s f nngffd ch.";
console.log("Total Vowel found [way-1]: ",countVowel(say));
console.log("Total vowel found [way-2]: ", countVowel2(say));
console.log("Total vowel found [way-3]: ", countVowel3(say));