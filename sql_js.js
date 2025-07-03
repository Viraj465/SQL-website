// Navigation between sections
function showSection(sectionId) {
  document.querySelectorAll(".content-section").forEach(function (sec) {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });
  var navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(function (btn) {
    if (
      btn.getAttribute("onclick") &&
      btn.getAttribute("onclick").includes(sectionId)
    ) {
      btn.classList.add("active");
    }
  });
}

// Show/Hide answer functionality
function toggleAnswer(btn) {
  var answer = btn.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    btn.textContent = "Show Answer";
  } else {
    answer.style.display = "block";
    btn.textContent = "Hide Answer";
  }
}
