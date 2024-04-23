<?php


function isPalindrome($str) {
    $len = strlen($str);
   

    for($i = 0; $i < $len/2; $i++) {
        if($str[$i] != $str[$len - $i - 1 ])
        {
            echo "this word is not palindrome\n";
        }
    }
    echo "this word is palindrome\n";


}
isPalindrome("mym");
isPalindrome("oop");
isPalindrome("test");
isPalindrome("moom");
?>