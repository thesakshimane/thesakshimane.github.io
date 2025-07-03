//---------------

const sidebar = document.getElementById("sidebar");
const openBtn = document.querySelector(".sidebar-open-button");
const closeBtn = document.querySelector(".sidebar-close-button");
const body = document.body;
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
const sections = document.querySelectorAll(".blog-content section");
const navButtons = document.querySelectorAll(".nav-button");

let currentSectionID = "disclaimer";

openBtn.addEventListener("click", () => {
  sidebar.classList.remove("closed");
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebar.classList.add("closed");
});

// Optional: Close on outside click (mobile)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !openBtn.contains(e.target)
  ) {
    sidebar.classList.remove("open");
    sidebar.classList.add("closed");
  }
});

//-----------------navigation link

function showSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) {
    console.error(`Section with ID "${sectionId}" not found.`);
    return;
  }

  sections.forEach((section) => {
    section.classList.remove("active-section");
  });

  targetSection.classList.add("active-section");

  currentSectionID = sectionId;

  updateSidebarActiveLink(sectionId);

  window.scrollTo({ top: 0, behavior: "smooth" });

  body.classList.remove("sidebar-open");
}

function updateSidebarActiveLink(sectionId) {
  sidebarLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");

    showSection(targetId);
  });
});

function revealSurprise() {
  const surpriseDiv = document.getElementById("surpriseImages");
  surpriseDiv.style.display = "block";

  // To trigger transition
  setTimeout(() => {
    surpriseDiv.style.opacity = 1;
  }, 10);
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwM97OL4F0oLQCzMeSCueUUpvHT8qlhzV5ZDHysFzOWZVZ6de8UdbQsDSy0irhtTryPaw/exec";
function handleFeedback(e) {
  e.preventDefault();

  const form = document.getElementById("feedbackForm");
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res.ok) {
        document.getElementById("feedbackMessage").textContent =
          "🎉 Thanks for your feedback!";
        form.reset();
      } else {
        document.getElementById("feedbackMessage").textContent =
          "Something went wrong. Please try again!";
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      document.getElementById("feedbackMessage").textContent =
        "Something went wrong. Please try again!";
    });
}

// Show the initial section
showSection(currentSectionID);
