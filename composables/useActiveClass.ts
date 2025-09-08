export const useActiveClass = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target && !target.classList.contains("active")) {
    document.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    target.classList.add("active");
    return target.innerText;
  }
};
