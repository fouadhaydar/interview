const btns = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".answer");

btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    // rotate btn
    if (e.target.classList.contains("rotation")) {
      e.target.classList.remove("rotation");
    } else {
      e.target.classList.add("rotation");
    }
    // get the target answer
    const targetAnswer = answers[index];
    if (targetAnswer.classList.contains("open")) {
      targetAnswer.classList.remove("open");
    } else {
      targetAnswer.classList.add("open");
    }
  });
});
