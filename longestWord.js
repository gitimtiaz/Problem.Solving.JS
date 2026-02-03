//Write a function to find the longest word in a given string.

function longestWord(said){
    const words = said.split(' ');
    let maxLength=0;
    let maxIndex=0;
    for(let i=0; i<words.length; i++){
        if(words[i].length>maxLength){
            maxLength=words[i].length;
            maxIndex=i;
        } 
    }
    const bigWord=words[maxIndex];
    return {bigWord,maxLength};
}

function longestWord2(says){
    const clean=says.replace(/[^a-zA-Z0-9\s]/g, '');
    const words=clean.split(' ');

    let maxWord="";
    for(let word of words){
        if(word.length>maxWord.length) maxWord=word;
    }
    return maxWord;
}

//way-1
let len=0;
//const say = "I am learning Programming to become a programmer.";
const say = "Hellooo! bbbb@World#"
const {bigWord, maxLength}=longestWord(say);
console.log("The Longest Word is: ",bigWord);
console.log("Max Length is: ",maxLength);

//way-2
const finalWord=longestWord2(say);
console.log("Longest Word [way-2]: ",finalWord+"\nWord Length: ",finalWord.length);