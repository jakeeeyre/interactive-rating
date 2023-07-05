const numberRatingHolder = document.querySelector(".rating-wrapper");
const navButton = document.querySelector("#submit-button");

//change color when number is chosen then back if another number is selected
numberRatingHolder.addEventListener("click", (e) => {
	const numberRating = Array.from(numberRatingHolder.children);
	const choice = document.querySelector("#change");
	const chosenNum = e.target.closest("p");
	if (!chosenNum) return;
	numberRating.forEach((num) => num.classList.remove("chosen-num"));
	chosenNum.classList.add("chosen-num");
    //match rating to option chosen
	choice.innerHTML = chosenNum.innerHTML;
    navButton.innerHTML = "Submit"
});

//change to results page
navButton.onclick = () => {
	const checkHasValue = document.querySelector("#change");
    //check a number has been chosen
	if (checkHasValue.innerHTML) {
		const unhideThanks = document.querySelector(".wrapper-thankyou");
		const hideRating = document.querySelector(".wrapper");
		unhideThanks.classList.remove("hidden");
		hideRating.classList.add("hidden");
	} else {
        navButton.innerHTML = "Please choose a number"
    }
};
