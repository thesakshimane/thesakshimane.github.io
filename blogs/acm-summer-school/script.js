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

const sheetDBUrl = "https://sheetdb.io/api/v1/cclqlxulv3hy4"; // Replace with your API

function handleFeedback(e) {
  e.preventDefault();

  const form = document.getElementById("feedbackForm");
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const timestamp = new Date().toLocaleString(); // e.g. "7/5/2025, 2:08:45 PM"

  const data = {
    data: [
      {
        name: name,
        email: email,
        message: message,
        timestamp: timestamp, // 👈 Add this line
      },
    ],
  };

  fetch(sheetDBUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        document.getElementById("feedbackMessage").textContent =
          "🎉 Thanks for your feedback!";
        form.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      document.getElementById("feedbackMessage").textContent =
        "⚠️ Something went wrong. Please try again!";
    });
}

// Show the initial section
showSection(currentSectionID);
