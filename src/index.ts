const image = document.querySelector(".img")
if (image) {
  image.addEventListener("click", (e) => {
    console.log("hi")
    image.style.animationPlayState = "running";
  })
  image.addEventListener("animationend", () => {
    console.log("Animation ended");
    image.style.animationPlayState = "paused";
  });
}

const bg = document.querySelector(".bg")
if (bg) {
  bg.addEventListener("click", (e) => {
    console.log("hi")
    bg.style.animationPlayState = "running";
  })
  bg.addEventListener("animationend", () => {
    console.log("Animation ended");
    bg.style.animationPlayState = "paused";
  });
}