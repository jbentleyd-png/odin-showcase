import { projects } from "./projects.js";

const demoProjects = [];
const demoCourses = ["ruby"];

function createCard(project) {
  const li = document.createElement("li");
  li.className = "card";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const screenshot = document.createElement("img");
  screenshot.src = project.screenshot;
  screenshot.alt = `screenshot of the ${title} project, clickable as a link to the demo page or live site`;
  screenshot.onclick = () => (window.location.href = `${project.liveUrl}`); // arrow function to not run on load
  screenshot.style = "cursor: pointer;";

  const desc = document.createElement("p");
  desc.textContent = project.description;

  const live = document.createElement("a");
  live.href = project.liveUrl;
  if (
    demoCourses.includes(project.category) ||
    demoProjects.includes(project.name)
  ) {
    live.textContent = "Demo Page";
  } else {
    live.textContent = "Live Site";
  }

  const repo = document.createElement("a");
  repo.href = project.repoUrl;
  repo.textContent = "GitHub Repository";

  li.append(title, desc, screenshot, live, repo);
  return li;
}

function renderProjects(category, containerId) {
  const container = document.getElementById(containerId);
  projects
    .filter((p) => p.category === category)
    .forEach((p) => container.append(createCard(p)));
}

renderProjects("foundations", "foundations-list");
renderProjects("ruby", "ruby-list");
renderProjects("intermediate", "intermediate-list");
renderProjects("rails", "rails-list");
