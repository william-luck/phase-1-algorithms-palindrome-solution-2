function isPalindrome(word) {
  let reversedWord = ''
  for (let i=word.length-1; i>=0; i--) {
    reversedWord = reversedWord + word[i];
  }
  console.log(reversedWord)
  return (reversedWord === word)
}



/* 
  Before looking at the video, I think this will use the decrementing for loop.

  Pseudo: 
    declare and empty string for reversed word 
    Then, use a for loop to start at the end of the string,
    On each iteration, populate the new sting with each letter.
    Then do the same test, if reversedWord equals word.


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("interior"));
}

module.exports = isPalindrome;
