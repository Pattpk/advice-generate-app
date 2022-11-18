const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".generate-btn");
const adviceCopy = document.querySelector(".text");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = id;
  adviceText.innerText = advice;
}

adviceCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(adviceText.innerText);
});


adviceBtn.addEventListener("click", getAdvice);
