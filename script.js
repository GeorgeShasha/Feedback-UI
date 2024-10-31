const containerEl = document.getElementById("container");
const ratingContainerEl = document.getElementById("rating-container");
const ratingEls = document.querySelectorAll(".rating");
const buttonEl = document.getElementById("btn");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

buttonEl.addEventListener("click", (event) => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `;
  }
});

const removeActive = () => {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
    ratingEl.parentNode.classList.remove("active");
  });
};
