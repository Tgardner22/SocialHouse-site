(function() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
