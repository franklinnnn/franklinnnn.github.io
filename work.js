let work = [
  {
    title: "reddit simple",
    img: "img/w1.png",
    link: "https://fa-redditsimple.netlify.app/",
    repository: "https://github.com/franklinnnn/reddit-simple",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Simplified Reddit app made to browse subreddits and read posts.",
  },
  {
    title: "todo/contact",
    img: "img/w2.png",
    link: "https://fa-redditsimple.netlify.app/",
    repository: "https://github.com/franklinnnn/todo-contact",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Create and manage a to do list, along with contacts and appointments.",
  },
  {
    title: "Flashcards",
    img: "img/w3.png",
    link: "https://fa-flashcards.netlify.app/",
    repository: "https://github.com/franklinnnn/flashcards",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Make custom flashcards for quizzes and categorize by topics.",
  },
  {
    title: "Endless Rolling",
    img: "img/w4.png",
    link: "https://franklinnnn.itch.io/endless-rolling",
    repository:
      "https://github.com/franklinnnn/cse4410/tree/main/FinalProject/Scripts",
    stack: "C# · Unity",
    desc: "Endless game to collect coins while dodging obstacles. Final project for game design course.",
  },
  {
    title: "F Chat",
    img: "img/w5.png",
    link: "https://chat-app-48ae2.web.app/",
    repository: "https://github.com/franklinnnn/",
    stack: "React · HTML · CSS · JavaScript · Firebase",
    desc: "Chat room app, with functionality to add rooms and direct messaging between users.",
  },
  {
    title: "Recipe Receipt",
    img: "img/w6.png",
    link: "https://recipe-receipt.netlify.app/",
    repository: "https://github.com/franklinnnn/recipe-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Recipe finder with search, cuisine categories, and featured dishes.",
  },
  {
    title: "Stronk Fitness",
    img: "img/w7.png",
    link: "https://stronk-fitness.netlify.app/",
    repository: "https://github.com/franklinnnn/fitness-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Look for exercises, categorized by body parts, muscle groups, and equipments. Each exercise has detailed demonstrations and example videos.",
  },
];

document.getElementById("work__container").innerHTML = work
  .map(
    (item) =>
      `<div class="work__img">
      <img src="${item.img}" alt=${item.title} />

      <div class="work__link">
        <div class="work__description">
          <a href=${item.link} class="work__link-name" target="_blank">
            <h1>${item.title}</h1>
          </a>
          <p class="work__stack">${item.stack}</p>
          <p>${item.desc}</p>
          <a href=${item.repository} target="_blank" class="work__link-icons">
            <i class="bx bxl-github"></i>
          </a>
          <a href=${item.link} class="work__link-icons" target="_blank">
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>`
  )
  .join(" ");
