const result = document.querySelector("#res");

const answerForm = document.querySelector("#form");
answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = document.querySelector("#svar").value.toLowerCase();
    checkAnswer(answer);
});

const checkAnswer = (answer) => {
    answer === "europa" ? correctAnswer() : wrongAnswer();
};

const correctAnswer = () => {
    result.className = "correct";
    result.textContent = "Det er korrekt!";
    notification();
};

const wrongAnswer = () => {
    result.className = "incorrect";
    result.textContent = "FEIL, FEIL, FEIL!!!";
    notification();
};

const notification = () => {
    setTimeout(() => {
        result.className = "";
        result.textContent = "";
    }, 3000);
    document.querySelector("#svar").value = "";
};
