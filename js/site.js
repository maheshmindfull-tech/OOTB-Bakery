(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-lock", open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-lock");
      });
    });
  }

  document.querySelectorAll("[data-accordion]").forEach(function (root) {
    root.querySelectorAll(".acc-item").forEach(function (item) {
      const button = item.querySelector(".acc-trigger");
      if (!button) return;
      button.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");
        if (root.dataset.accordion === "single") {
          root.querySelectorAll(".acc-item").forEach(function (other) {
            other.classList.remove("is-open");
            const b = other.querySelector(".acc-trigger");
            if (b) b.setAttribute("aria-expanded", "false");
          });
        }
        item.classList.toggle("is-open", willOpen);
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    });
  });

  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    const buttons = root.querySelectorAll("[data-tab]");
    const panels = root.querySelectorAll("[data-panel]");
    function activate(id, scroll) {
      buttons.forEach(function (button) {
        const on = button.dataset.tab === id;
        button.classList.toggle("is-active", on);
        button.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (panel) {
        const on = panel.dataset.panel === id;
        panel.classList.toggle("is-active", on);
        panel.hidden = !on;
      });
      if (scroll) {
        const bar = root.querySelector(".tab-bar");
        if (bar) bar.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activate(button.dataset.tab, false);
        history.replaceState(null, "", "#" + button.dataset.tab);
      });
    });
    const hash = location.hash.replace("#", "");
    if (hash && root.querySelector('[data-tab="' + hash + '"]')) activate(hash, false);
  });

  document.querySelectorAll("[data-filter]").forEach(function (root) {
    const buttons = root.querySelectorAll("[data-filter-value]");
    const items = root.querySelectorAll("[data-tags]");
    const empty = root.querySelector("[data-filter-empty]");
    function apply(value) {
      let shown = 0;
      buttons.forEach(function (button) {
        const on = button.dataset.filterValue === value;
        button.classList.toggle("is-active", on);
        button.setAttribute("aria-pressed", on ? "true" : "false");
      });
      items.forEach(function (item) {
        const tags = item.dataset.tags.split(",");
        const match = value === "all" || tags.indexOf(value) !== -1;
        item.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown !== 0;
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.dataset.filterValue);
      });
    });
  });

  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const title = lightbox.querySelector(".lightbox-title");
    const kicker = lightbox.querySelector(".lightbox-kicker");
    const body = lightbox.querySelector(".lightbox-body");
    const frame = lightbox.querySelector(".lightbox-frame");
    function close() {
      lightbox.hidden = true;
      document.body.classList.remove("nav-lock");
    }
    function openFrom(card) {
      title.textContent = card.dataset.clipTitle || "";
      kicker.textContent = card.dataset.clipKicker || "";
      body.textContent = card.dataset.clipBody || "";
      frame.className = "lightbox-frame media " + (card.dataset.clipMedia || "");
      lightbox.hidden = false;
      document.body.classList.add("nav-lock");
      lightbox.querySelector(".lightbox-close").focus();
    }
    document.querySelectorAll("[data-clip-title]").forEach(function (card) {
      card.querySelectorAll(".js-clip").forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
          event.preventDefault();
          openFrom(card);
        });
      });
    });
    lightbox.addEventListener("click", function (event) {
      if (event.target.closest("[data-close-lightbox]")) close();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) close();
    });
    const clipHash = location.hash.replace("#", "");
    if (clipHash.indexOf("clip-") === 0) {
      const card = document.getElementById(clipHash);
      if (card) openFrom(card);
    }
  }

  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const productField = document.querySelector("[data-product-field]");
  if (product && productField) {
    const option = Array.from(productField.options).find(function (item) {
      return item.value === product;
    });
    if (option) productField.value = product;
  }
  const role = params.get("role");
  const roleField = document.querySelector("[data-role-field]");
  if (role && roleField) {
    const option = Array.from(roleField.options).find(function (item) {
      return item.value === role;
    });
    if (option) roleField.value = role;
    const form = document.getElementById("apply");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll("form[data-mail]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const lines = [];
      data.forEach(function (value, key) {
        if (value instanceof File) {
          if (value.name) lines.push(key + ": " + value.name + " (attach this file)");
          return;
        }
        lines.push(key + ": " + value);
      });
      const subject = encodeURIComponent(form.dataset.subject || "OOTB Bakery website enquiry");
      const body = encodeURIComponent(lines.join("\n"));
      const note = form.querySelector(".form-note");
      if (note) {
        note.hidden = false;
        note.focus();
      }
      window.location.href = "mailto:" + form.dataset.mail + "?subject=" + subject + "&body=" + body;
    });
  });
})();
