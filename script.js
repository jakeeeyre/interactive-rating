
const numberRatingHolder = document.querySelector(".rating-wrapper");
const navButton = document.querySelector("#submit-button")


//change color when number is chosen, plus add chosen number to results page
numberRatingHolder.addEventListener("click", e => {
    const numberRating = Array.from(numberRatingHolder.children)
    const choice = document.querySelector("#change")
    const chosenNum = e.target.closest("p")
    if (!chosenNum) return;
    numberRating.forEach((num) => num.classList.remove("chosen-num"))
    chosenNum.classList.add("chosen-num")
    choice.innerHTML = chosenNum.innerHTML
})    

//change to results page
navButton.onclick = () => {
    const unhideThanks = document.querySelector(".wrapper-thankyou")
    const hideRating = document.querySelector(".wrapper")
    unhideThanks.classList.remove("hidden");
    hideRating.classList.add("hidden")
}
