const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  menu.addEventListener("click", (e) => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
    const className = target.classList[0];
    markAll.forEach((block) => {
      if (block.classList.contains(className)) {
        no.style.display = "none";
        no.classList.remove("animated", "fadeIn");
        block.style.display = "block";
        block.classList.add("animated", "fadeIn");
      }
      if (
        target.classList.contains("grandmother") ||
        target.classList.contains("granddad")
      ) {
        no.style.display = "block";
        no.classList.add("animated", "fadeIn");
      }
      if (!block.classList.contains(className)) {
        block.style.display = "none";
      }
    });
  });
};

export default filter;
