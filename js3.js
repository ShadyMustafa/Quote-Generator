/*const quotes = [
  "Being different means being unique and that's what makes the world and exciting place to be in",
  "Being by the sea is a balm for the soul.",
  "If you're going through hell, keep going.",
  "It always seems impossible until it's done.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
  "Quality is not an act, it is a habit.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Start where you are. Use what you have. Do what you can.",
  "What you do today can improve all your tomorrows.",
  "A good plan violently executed now is better than a perfect plan executed next week.",
  "You can find peace amidst the storms that threaten you."
]

const usedIndex = new Set();
const quoteInput = document.getElementById('input')

function quoteGenerate (){
  if(usedIndex.size === quotes.length){
    usedIndex.clear()
  }

  while (true){
    const randomIndex = Math.floor(Math.random()*quotes.length)
    if (usedIndex.has(randomIndex)) continue
    const quote = quotes[randomIndex]
    quoteInput.innerHTML = quote ;
    usedIndex.add(randomIndex);
    break

  }
}*/

const quotes =[
  "Being different means being unique and that's what makes the world and exciting place to be in",
  "Being by the sea is a balm for the soul.",
  "If you're going through hell, keep going.",
  "It always seems impossible until it's done.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
  "Quality is not an act, it is a habit.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Start where you are. Use what you have. Do what you can.",
  "What you do today can improve all your tomorrows.",
  "A good plan violently executed now is better than a perfect plan executed next week.",
  "You can find peace amidst the storms that threaten you."
]

const usedIndex = new Set();
const quoteInput = document.getElementById("input")

function quoteGenerate(){
  if(usedIndex.size === quotes.length ){
      usedIndex.clear();
  }
  while (true){
    const quoteIndex = Math.floor(Math.random()*quotes.length)
    if (usedIndex.has(quoteIndex)) continue
    const quote = quotes[quoteIndex]
    quoteInput.innerHTML=quote
    break

  }
}
