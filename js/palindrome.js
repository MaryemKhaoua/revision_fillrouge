function isPalindrome(str){
    const len = str.length;

    for(let i = 0; i < len/2; i++)
    {
        if(str[i] != str[len - 1 - i]) {

            return 'this word is not a palindrome';
        }
    }
    return 'this word is palindrome';

}

let str1 = "mym";
let str2 = "mom";
let str3 = "vbnh";
let str4 = "TooT";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));