(function () {
  // Active nav highlight
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Current year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Countdown for June 6 (local time)
  // Change START_HOUR if you want a different time.
  const START_HOUR = 9;
  const START_MIN = 0;

  const el = document.getElementById("kingpin-countdown");
  if (el) {
    const now = new Date();
    const hasPassedThisYear =
      now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() > 6);

    const yearTarget = hasPassedThisYear ? now.getFullYear() + 1 : now.getFullYear();
    const eventDate = new Date(yearTarget, 5, 6, START_HOUR, START_MIN, 0); // month 5 = June

    function tick() {
      const diff = eventDate - new Date();
      if (diff <= 0) {
        el.textContent = "Today!";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      el.textContent = `${days} days, ${hours} hours, ${mins} minutes`;
    }

    tick();
    setInterval(tick, 60000);
  }
})();
