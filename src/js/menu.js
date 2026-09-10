import { rovingIndex } from "roving-ux";

rovingIndex({
  element: document.querySelector(".menu-button"),
  target: "a",
});

const menu = document.querySelector(".menu-button");
const menuRect = menu.getBoundingClientRect();

const { matches: motionOK } = window.matchMedia(
  "(prefers-reduced-motion: no-preference)",
);

const getAngles = (clientX, clientY) => {
  const { x, y, width, height } = menuRect;

  const dx = clientX - (x + 0.5 * width);
  const dy = clientY - (y + 0.5 * height);

  return { dx, dy };
};

if (motionOK) {
  window.addEventListener("mousemove", ({ target, clientX, clientY }) => {
    const { dx, dy } = getAngles(clientX, clientY);

    menu.style.setProperty("--x", `${dy / 20}deg`);
    menu.style.setProperty("--y", `${dx / 20}deg`);
  });
}
