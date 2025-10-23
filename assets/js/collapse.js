 // Select all toggle buttons
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const section = document.getElementById(targetId);

      // Toggle visibility
      section.classList.toggle("show");

      // Change button text dynamically
      btn.textContent = section.classList.contains("show")
        ? "Collapse"
        : "Explore";
    });
  });