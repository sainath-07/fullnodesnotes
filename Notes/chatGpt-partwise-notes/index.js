// ─────────────────────────────────────────────
//  ADD YOUR TOPICS HERE
//  label  → button text shown in the sidebar
//  file   → path to the HTML file to load (relative to this folder)
// ─────────────────────────────────────────────
const topics = [
  { label: "Introduction", file: "topics/introduction.html" },
  { label: "Modules", file: "topics/modules.html" },
  { label: "File System", file: "topics/filesystem.html" },
  // add more topics below ↓
];

// ─────────────────────────────────────────────
//  DO NOT EDIT BELOW (rendering logic)
// ─────────────────────────────────────────────
const topicList = document.getElementById("topicList");
const contentWrapper = document.getElementById("contentWrapper");

// Build sidebar buttons from the array
topics.forEach((topic, index) => {
  const li = document.createElement("li");
  li.className = "nav-item";

  const btn = document.createElement("button");
  btn.className = "nav-link w-100 text-start";
  btn.textContent = topic.label;
  btn.dataset.index = index;

  btn.addEventListener("click", () => {
    // Toggle active state
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    btn.classList.add("active");

    // Load the HTML file into the content area
    loadTopic(topic.file, topic.label);
  });

  li.appendChild(btn);
  topicList.appendChild(li);
});

function loadTopic(file, label) {
  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error(`Could not load: ${file}`);
      return res.text();
    })
    .then((html) => {
      contentWrapper.innerHTML = html;
    })
    .catch(() => {
      contentWrapper.innerHTML = `
        <div class="alert alert-warning">
          <strong>${label}</strong> — file not found: <code>${file}</code>
        </div>`;
    });
}
