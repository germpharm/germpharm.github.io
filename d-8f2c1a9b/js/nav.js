(function () {
  var header = document.querySelector("header.nav");
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !btn) return;

  function setOpen(open) {
    header.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  btn.addEventListener("click", function () {
    setOpen(!header.classList.contains("open"));
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("open")) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (!header.classList.contains("open")) return;
    if (!header.contains(e.target)) setOpen(false);
  });

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 759px)").matches) setOpen(false);
      });
    });
  }
})();
