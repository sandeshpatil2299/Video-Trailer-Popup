const btnEl= document.querySelector(".btn");
const divEl= document.querySelector(".trailerContainer");
const iEl= document.querySelector(".close");
const videoEl= document.querySelector("video");

btnEl.addEventListener("click", () =>
{
   divEl.classList.remove("active");
})

iEl.addEventListener("click", () =>
{
   divEl.classList.add("active");
   videoEl.pause();
   videoEl.currentTime= 0;
})