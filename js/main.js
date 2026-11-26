(function () {
  var root = document.documentElement;
  root.className = root.className.replace("no-js", "js");
  var BP = 768;
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    root.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    root.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
    overlay.addEventListener("click", closeMenu);
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > BP) { closeMenu(); } });
  }
  var groups = document.querySelectorAll(".drawer-toggle");
  for (var g = 0; g < groups.length; g++) {
    groups[g].addEventListener("click", function () {
      var sub = document.getElementById(this.getAttribute("aria-controls"));
      var open = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", open ? "false" : "true");
      if (sub) { sub.classList.toggle("open", !open); }
    });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var q = 0; q < qs.length; q++) {
    qs[q].addEventListener("click", function () {
      var item = this.parentNode;
      var open = item.classList.contains("open");
      item.classList.toggle("open", !open);
      this.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }
})();
