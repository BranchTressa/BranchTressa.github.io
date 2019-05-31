let answers= [
    "It is in your future!",
    "Sorry but that ain't happening!",
    "That actually might happen!",
    "Nope, try again!",
    "Heck yeah!",
    "Don't count on it!",
    "Better not tell you now!",
    "Reply pending!",
    "Definitely not!",
    "Of course, human!"
]
function answer() {
    let myAnswer = Math.floor(Math.random() * answers.length)
    let response = answers[myAnswer]
    document.querySelector("#result").innerHTML = response
}
