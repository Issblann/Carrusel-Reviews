// local reviews data
const reviews = [
  {
    id: 1,
    name: "Andrew Cox",
    job: "Accountant",
    img: "./assets/hombre-1.png",
    review:
      "I have been using the Ogi Moisture Cream for a few months now and my skin has never looked better. It has improved the texture and tone of my skin, leaving me with a healthy, radiant glow. I highly recommend this product to anyone looking for a high-quality skincare solution.",
  },
  {
    id: 2,
    name: "Jennifer Banks",
    job: "Administrator",
    img: "./assets/mujer-1.png",
    review:
      "I was hesitant to try the Ogi Moisture Cream at first, but I am glad I took the chance. It has significantly improved the appearance of my skin, reducing the appearance of fine lines and wrinkles. I highly recommend this product to anyone looking to enhance their skincare routine.",
  },
  {
    id: 3,
    name: "Emily Maxwell",
    job: "Expert Architect",
    img: "./assets/mujer-2.png",
    review:
      "I have struggled with problematic skin for years and the Ogi Moisture Cream has been a lifesaver. It has cleared up my skin and improved the overall appearance. I am so grateful for this product and would recommend it to anyone looking for a solution to their skin problems.",
  },

  {
    id: 4,
    name: "Andrew Gutierrez",
    job: "IT professional",
    img: "./assets/hombre-2.png",
    review:
      "I have been using the Ogi Moisture Cream for a few weeks now and I am already seeing a noticeable difference in my skin. It is lightweight and absorbs quickly, leaving my skin feeling refreshed and revitalized. I highly recommend this product to anyone looking for a high-quality skincare solution.",
  },

  {
    id: 5,
    name: "Vickie Williams",
    job: "Model",
    img: "./assets/mujer-3.png",
    review:
      "I have sensitive skin and finding skincare products that work for me can be a challenge. The Ogi Moisture Cream has been a game-changer for me. It is gentle and effective, improving the appearance of my skin without causing any irritation. I highly recommend this product to anyone with sensitive skin looking for a solution.",
  },
];

const img = document.getElementById("person__img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");
const randomBtn = document.querySelector(".surprise__btn");

// Guardar la review en una variable
let currentReview = 0; 



// Mostrar a las personas con su informacion llamando a los objetos del array
const showPerson = () =>{
  const review = reviews[currentReview];
  img.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.review;
}

// funcion para mostrar a la siguiente persona
const nextPerson = () =>{
  currentReview++;
  if(currentReview > reviews.length - 1){
    currentReview = 0;
  }
  showPerson();
}

// funcion para mostrar a la anterior persona
const prevPerson = () =>{
  currentReview--;
  if(currentReview < 0){
    currentReview = reviews.length -1;
  }
  showPerson();
}

// funcion para mostrar una persona aleatoria
const randomPerson = () =>{
  currentReview = Math.floor(Math.random() * reviews.length);
  showPerson();
}

// ESCUCHADORES
window.addEventListener("DOMContentLoaded", showPerson);
nextBtn.addEventListener("click", nextPerson);
prevBtn.addEventListener("click", prevPerson);
randomBtn.addEventListener("click", randomPerson);