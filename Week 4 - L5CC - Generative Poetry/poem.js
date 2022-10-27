// this is a function to return a random element from an array
function randomElementFromArray(inputArray) {
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}


let openingLine = "There was a man called Dave"
let pronouns = ["I", "we", "they", "he", "she"]
let verbs = ["ran", "sat", "ate", "whistled", "walked", "throwing", "fighting", "shouting", "slept", "crawled"]
let adverbs = ["quickly", "quitely", "accidently", "bravely", "instantly", "innocently",]

let titles = ["That Guy", "The adventures of indiana Dave"]
document.getElementById("heading").innerHTML = titles

let longPoem = ""

for (let i = 0; i < 10; i++) {
    let pronoun = randomElementFromArray(pronouns)
    let verb = randomElementFromArray(verbs)
    let adverb = randomElementFromArray(adverbs)
    let poem = openingLine + " " + pronoun + " " + verb + " " + adverb + "<br>"
    longPoem += poem
}

console.log(longPoem)
document.getElementById("para").innerHTML = longPoem
