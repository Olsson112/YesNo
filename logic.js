
function generateAnswer() {
    fetch("https://yesno.wtf/api?force=maybe")
    .then((answer) => {
        return answer.json()
    }).then((parsedAnswer) => {
        var img = document.getElementById("answerImage")
        var text = document.getElementById("answerText")

        img.src = parsedAnswer.image
        text.innerText = parsedAnswer.answer
        console.log("Svar: ", parsedAnswer)
    }).catch((error) => {
        console.log(error)
    }) 
}