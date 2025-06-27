document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const body = document.body;
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const sections = document.querySelectorAll(".blog-content section");
  const navButtons = document.querySelectorAll(".nav-button");

  let currentSectionID = "disclaimer";

  function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      console.error(`Section with ID "${sectionId}" not found.`);
      return;
    }

    sections.forEach((section) => {
      section.style.display = "none";
    });

    targetSection.style.display = "block";

    currentSectionID = sectionId;

    updateSidebarActiveLink(sectionId);

    window.scrollTo({ top: 0, behavior: "smooth" });

    body.classList.remove("sidebar-open");
  }

  function updateSidebarActiveLink(sectionId) {
    sidebarLinks.forEach((link) => {
      if (link.getAttribute("href") == `#${sectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  sidebarToggle.addEventListener("click", () => {
    body.classList.toggle("sidebar-open");
  });

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

  showSection(currentSectionID);
});
