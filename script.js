/* -------------------------
        LOVE GAME
------------------------- */

const pages = document.querySelectorAll(".page");
const progressBar = document.getElementById("progressBar");
const music = document.getElementById("bgMusic");

let currentLevel = 0;

const totalLevels = pages.length;

/* -------------------------
        START GAME
------------------------- */

document.getElementById("startBtn").addEventListener("click", () => {
  music.play().catch(() => {});

  showLevel(1);
});

/* -------------------------
        SHOW LEVEL
------------------------- */

function showLevel(index) {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  pages[index].classList.add("active");

  currentLevel = index;

  updateProgress();
}

/* -------------------------
        PROGRESS BAR
------------------------- */

function updateProgress() {
  let progress = (currentLevel / (totalLevels - 1)) * 100;

  progressBar.style.width = progress + "%";
}

/* -------------------------
        OPTIONS
------------------------- */

document.querySelectorAll(".option").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      celebrate();

      setTimeout(() => {
        showLevel(currentLevel + 1);
      }, 1200);
    } else {
      wrongAnswer(button);
    }
  });
});

/* -------------------------
        WRONG ANSWER
------------------------- */

function wrongAnswer(button) {
  button.animate(
    [
      { transform: "translateX(-10px)" },

      { transform: "translateX(10px)" },

      { transform: "translateX(-10px)" },

      { transform: "translateX(0px)" },
    ],
    {
      duration: 400,
    },
  );
}

/* -------------------------
        LEVEL 2 IMAGE
------------------------- */

const blurImage = document.querySelector(".blur");

if (blurImage) {
  blurImage.addEventListener("click", () => {
    blurImage.classList.remove("blur");
  });
}

/* -------------------------
        NICKNAME LEVEL
------------------------- */

const submit = document.getElementById("submitNickname");

if (submit) {
  submit.addEventListener("click", () => {
    let value = document.getElementById("nickname").value.trim().toLowerCase();

    const correctAnswers = ["aot", "attack on titan", "attack on titans"];

    if (correctAnswers.includes(value)) {
      celebrate();

      setTimeout(() => {
        showLevel(currentLevel + 1);
      }, 1000);
    } else {
      alert("❌ Nope! Hint: It's our first series together ❤️");
    }
  });
}

/* -------------------------
        TIMELINE
------------------------- */

const timelineBtn = document.getElementById("nextTimeline");

if (timelineBtn) {
  timelineBtn.addEventListener("click", () => {
    showLevel(currentLevel + 1);
  });
}

/* -------------------------
        VACATION
------------------------- */

document.querySelectorAll(".place").forEach((card) => {
  card.addEventListener("click", () => {
    celebrate();

    setTimeout(() => {
      showLevel(currentLevel + 1);
    }, 1000);
  });
});

/* -------------------------
        REPLAY
------------------------- */

const replay = document.getElementById("replay");

if (replay) {
  replay.addEventListener("click", () => {
    showLevel(0);
  });
}

/* -------------------------
        FLOATING HEARTS
------------------------- */

const heartContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 18 + Math.random() * 25 + "px";

  heart.style.animationDuration = 5 + Math.random() * 6 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);

/* -------------------------
        CELEBRATION
------------------------- */

function celebrate() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 40);
  }
}

/* -------------------------
        KEYBOARD SECRET
------------------------- */

let typed = "";

document.addEventListener("keydown", (e) => {
  typed += e.key.toLowerCase();

  if (typed.length > 20) {
    typed = typed.slice(-20);
  }

  if (typed.includes("iloveyou")) {
    celebrate();

    alert("❤️ Awww... I Love You Too ❤️");

    typed = "";
  }
});

const hiddenPhoto = document.getElementById("hiddenPhoto");
const hiddenMessage = document.getElementById("hiddenMessage");
const continueFinal = document.getElementById("continueFinal");

if (hiddenPhoto) {
  hiddenPhoto.addEventListener("click", () => {
    celebrate();

    hiddenMessage.style.display = "block";

    continueFinal.style.display = "inline-block";
  });
}

if (continueFinal) {
  continueFinal.addEventListener("click", () => {
    showLevel(currentLevel + 1);
  });
}
