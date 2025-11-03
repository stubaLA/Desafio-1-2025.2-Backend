function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let ronaldo = "";
  for(let i = str.length; i != 0; i--){
    ronaldo += str[i - 1];
  }
  if(str == ronaldo){
    return true;
  } else {
    return false;
  }
  return true;
}

palindrome("eye");