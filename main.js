// local reviews data
const reviews = [
  {
    id: 1,
    name: "Andrew Cox",
    job: "Accountant",
    review:
      "I have been using the X skincare product for a few months now and my skin has never looked better. It has improved the texture and tone of my skin, leaving me with a healthy, radiant glow. I highly recommend this product to anyone looking for a high-quality skincare solution.",
  },
  {
    id: 2,
    name: "Jennifer Banks",
    job: "Administrator",
    review:
      "I was hesitant to try the X skincare product at first, but I am glad I took the chance. It has significantly improved the appearance of my skin, reducing the appearance of fine lines and wrinkles. I highly recommend this product to anyone looking to enhance their skincare routine.",
  },
  {
    id: 3,
    name: "Emily Maxwell",
    job: "Expert Architect",
    review:
      "I have struggled with problematic skin for years and the X skincare product has been a lifesaver. It has cleared up my skin and improved the overall appearance. I am so grateful for this product and would recommend it to anyone looking for a solution to their skin problems.",
  },

  {
    id: 4,
    name: "Andrew Gutierrez",
    job: "IT professional",
    review:
      "I have been using the X skincare product for a few weeks now and I am already seeing a noticeable difference in my skin. It is lightweight and absorbs quickly, leaving my skin feeling refreshed and revitalized. I highly recommend this product to anyone looking for a high-quality skincare solution.",
  },

  {
    id: 5,
    name: "Vickie Williams",
    job: "Model",
    review:
      "I have sensitive skin and finding skincare products that work for me can be a challenge. The X skincare product has been a game-changer for me. It is gentle and effective, improving the appearance of my skin without causing any irritation. I highly recommend this product to anyone with sensitive skin looking for a solution.",
  },
];

const img = document.getElementById("persona__img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");
const randomBtn = document.querySelector(".surprise__btn");
