function isPalindromeRecursive(str) {
   if (str.length <= 1) {
      return true;
    }
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    return isPalindromeRecursive(str.slice(1, -1));
  }
  
  let str1 = "racecar";
  let str2 = "hello";
  
  console.log(isPalindromeRecursive(str1)); // true
  console.log(isPalindromeRecursive(str2)); // false
  