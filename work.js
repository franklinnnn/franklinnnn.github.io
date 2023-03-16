let work = [
  {
    title: "reddit simple",
    img: "img/work/reddit-simple.png",
    link: "https://fa-redditsimple.netlify.app/",
    repository: "https://github.com/franklinnnn/reddit-simple",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Simplified Reddit app made to browse subreddits and read posts.",
  },
  {
    title: "todo/contact",
    img: "img/work/todo-contact.png",
    link: "https://fa-todocontact.netlify.app/",
    repository: "https://github.com/franklinnnn/todo-contact",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Create and manage a to do list, along with contacts and appointments.",
  },
  {
    title: "Flashcards",
    img: "img/work/flashcards.png",
    link: "https://fa-flashcards.netlify.app/",
    repository: "https://github.com/franklinnnn/flashcards",
    stack: "React Redux · HTML · CSS · JavaScript",
    desc: "Make custom flashcards for quizzes and categorize by topics.",
  },
  {
    title: "Endless Rolling",
    img: "img/work/endless-rolling.png",
    link: "https://franklinnnn.itch.io/endless-rolling",
    repository:
      "https://github.com/franklinnnn/cse4410/tree/main/FinalProject/Scripts",
    stack: "C# · Unity",
    desc: "Endless game to collect coins while dodging obstacles. Final project for game design course.",
  },
  {
    title: "F Chat",
    img: "img/work/f-chat.png",
    link: "https://chat-app-48ae2.web.app/",
    repository: "https://github.com/franklinnnn/",
    stack: "React · HTML · CSS · JavaScript · Firebase",
    desc: "Chat room app, with functionality to add rooms and direct messaging between users.",
  },
  {
    title: "Recipe Receipt",
    img: "img/work/recipe-receipt.png",
    link: "https://recipe-receipt.netlify.app/",
    repository: "https://github.com/franklinnnn/recipe-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Recipe finder with search, cuisine categories, and featured dishes.",
  },
  {
    title: "Stronk Fitness",
    img: "img/work/stronk-fitness.png",
    link: "https://stronk-fitness.netlify.app/",
    repository: "https://github.com/franklinnnn/fitness-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Look for exercises, categorized by body parts, muscle groups, and equipments. Each exercise has detailed demonstrations and example videos.",
  },
  {
    title: "Find Words",
    img: "img/work/find-words.png",
    link: "https://find-words.vercel.app/",
    repository: "https://github.com/franklinnnn/thesaurus-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Quick and simple thesaurus app with some extra options.",
  },
  {
    title: "AI Imager",
    img: "img/work/ai-imager.png",
    link: "https://ai-image-app.vercel.app/",
    repository: "https://github.com/franklinnnn/ai-image-app",
    stack: "MongoDB · Express · React · Node · Tailwind",
    desc: "AI image generator app using OpenAI. Generated images can be posted to a gallery.",
  },
  {
    title: "Weather + News",
    img: "img/work/weather-news.png",
    link: "https://weather-app-zeta-lyart.vercel.app/",
    repository: "https://github.com/franklinnnn/weather-app",
    stack: "React · HTML · CSS · JavaScript",
    desc: "Search for current weather of any city, including sunrise, sunset, and 5 day forcasts, along with the most recent and relevant news.",
  },
];

document.getElementById("work__container").innerHTML = work
  .sort((a, b) => a.title.localeCompare(b.title))
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
