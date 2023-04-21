 // In this method, we attempt to determine if the status of a string is a palindrome or not, using a for loop function. This function can also be done using the string split and reverse function. For the sake of simplicity, we will use for loop method.
    
    
    const str = 'rotator';
    const isPalindrome = (inStr) => {
        for (let i=0; i<inStr.length; i+=1) {
            if (inStr[i] !== inStr[inStr.length-1-i]) {
                return false;
            }
        }
        return true;
    }
    console.log(isPalindrome(str));

   