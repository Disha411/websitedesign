// replace vowels into 0 in String

function changeVowel(str) {
    return str.replace(/[aeiouAEIOU]/, '0');
}


let String = "disha";
let newstring = changeVowel(String);
console.log(newstring); 