"use strict";

const arrowButtons = document.querySelectorAll(".arrow");
const images = document.querySelectorAll(".image-link");
let currentImage = document.querySelector(".image-link.shown");
let currentIndex = parseInt(
  currentImage.attributes.getNamedItem("data-index").value
);

function changeImage() {
  console.log(currentImage, currentIndex);
  images.forEach(image => {
    if (
      parseInt(image.attributes.getNamedItem("data-index").value) ===
      currentIndex
    ) {
      console.log("GOT IT");
      image.classList.add("shown");
      currentImage = image;
    }
  });
}

function changeIndex(newIndex) {
  if (newIndex < 0) {
    currentIndex = images.length - 1;
  } else if (newIndex > images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = newIndex;
  }
  changeImage();
}

function slideImage(currentIndex, direction) {
  console.log(currentIndex, direction);
  currentImage.classList.remove("shown");
  direction === "back"
    ? changeIndex(currentIndex - 1)
    : changeIndex(currentIndex + 1);
}

arrowButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    if (this.dataset.direction === "back") {
      slideImage(currentIndex, "back");
    } else {
      slideImage(currentIndex, "forward");
    }
  });
});
