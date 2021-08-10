//given a string of characters
//return the reverse of that without using .reverse()

function reverseString(word){
 
 let resultArr = []

  for(let i=word.length-1; i>=0; i--){
    resultArr.push(word[i])
  }
  return resultArr.join("")
}
//"abc" -> "cba"
//Goat -> toaG

console.log(reverseString("lala"), " should return alal")
console.log(reverseString("Goard"), "draoG")