const $ = (selector) => document.querySelector(selector);

function renderWork(work) {
  const tags = work.technologies.map((technology) => `<span>${technology}</span>`).join("");
  const visual = work.image
    ? work.url
      ? `<a class="work-visual ${work.imageType === "mobile" ? "is-mobile" : "is-desktop"}" href="${work.url}" target="_blank" rel="noopener noreferrer" aria-label="${work.name}を開く">
        <img src="${work.image}" alt="${work.imageAlt}" loading="lazy" />
        <span class="visual-badge">LIVE SCREEN</span>
        <span class="visual-corner" aria-hidden="true"></span>
      </a>`
      : `<div class="work-visual ${work.imageType === "mobile" ? "is-mobile" : "is-desktop"}" aria-label="${work.name}の画像">
        <img src="${work.image}" alt="${work.imageAlt}" loading="lazy" />
        <span class="visual-badge">WINDOWS TOOL</span>
        <span class="visual-corner" aria-hidden="true"></span>
      </div>`
    : `<div class="work-visual is-tool" aria-label="${work.name}のWindowsツール">
        <span class="tool-visual-title">${work.name}</span>
        <span class="visual-badge">WINDOWS TOOL</span>
        <span class="visual-corner" aria-hidden="true"></span>
      </div>`;
  const action = work.url
    ? `<a class="text-link" href="${work.url}" target="_blank" rel="noopener noreferrer">${work.actionLabel || "アプリを見る"} <span aria-hidden="true">↗</span></a>`
    : `<span class="text-link is-static">${work.actionLabel || "詳細を見る"}</span>`;
  return `
    <article class="work-card reveal">
      ${visual}
      <div class="work-body">
        <div class="work-heading">
          <span class="work-number">${work.number}</span>
          <span class="work-label">${work.label}</span>
        </div>
        <h3>${work.name}</h3>
        <p>${work.description}</p>
        <div class="tag-list" aria-label="使用技術">${tags}</div>
        ${action}
      </div>
    </article>`;
}

function renderTools(group) {
  return `
    <div class="tool-group reveal${group.title === "QUALIFICATIONS" ? " is-qualifications" : ""}">
      <p class="eyebrow">${group.title}</p>
      <div class="tool-list">${group.items.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>`;
}

function render() {
  const { profile, youtube, works, tools } = portfolioData;
  document.querySelectorAll("[data-profile-name]").forEach((element) => { element.textContent = profile.name; });
  $("[data-profile-english]").textContent = profile.englishName;
  $("[data-profile-motto]").textContent = profile.motto;
  $("[data-proverb]").textContent = profile.proverb;
  $("[data-youtube-subscribers]").textContent = youtube.subscribers;
  $("[data-youtube-views]").textContent = youtube.totalViews;
  $("[data-youtube-channel]").textContent = youtube.channelName;
  $("[data-youtube-description]").textContent = youtube.description;
  $("[data-youtube-link]").href = youtube.url;
  $("[data-works]").innerHTML = works.map(renderWork).join("");
  $("[data-tools]").innerHTML = tools.map(renderTools).join("");
  $("[data-likes]").innerHTML = profile.likes.map((item) => `<li>${item}</li>`).join("");
  $("[data-dislikes]").innerHTML = profile.dislikes.map((item) => `<li>${item}</li>`).join("");
}

function setupInteractions() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("nav-open"));
  });

  const menuButton = $("[data-menu]");
  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

render();
setupInteractions();
