import { demos } from "./demos.js";

// Use the H1 to determine what video and description to render:
const demoTitle = document.querySelector("#demo-title");
const selectedDemo = demos.find((demo) => demo.title === demoTitle.textContent);

function renderDemoPage(selectedDemo) {
  const video = document.querySelector("#demo-video");
  video.src = selectedDemo.video;
  video.alt = `A screencaptured video demonstrating the ${selectedDemo.title} project.`;

  const link = document.querySelector("#github");
  link.href = selectedDemo.github;

  const description = document.querySelector("#demo-description");
  description.textContent = selectedDemo.description;
}

renderDemoPage(selectedDemo);
