function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const showCode = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  const result = getRandomHexColor();
  document.body.style.backgroundColor = result;
  showCode.textContent = result;
});