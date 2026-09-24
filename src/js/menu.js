import { rovingIndex } from "roving-ux";

const menu = document.querySelector(".menu-button");

if (menu) {
  rovingIndex({
    element: menu,
    target: "a",
  });

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
}
