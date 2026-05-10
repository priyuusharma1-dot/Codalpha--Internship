// script.js

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showImage();
});

// Previous
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showImage();
});

// Filter Function

function filterSelection(category){

  const allImages = document.querySelectorAll(".image");

  allImages.forEach((item) => {

    if(category === "all"){
      item.style.display = "block";
    }

    else if(item.classList.contains(category)){
      item.style.display = "block";
    }

    else{
      item.style.display = "none";
    }

  });

}