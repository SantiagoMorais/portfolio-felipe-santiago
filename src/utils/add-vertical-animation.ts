export const addVerticalAnimation = () => {
  const scrollers = document.querySelectorAll(".vertical-scroller");
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");
    const scrollerInner = scroller.querySelector(".scroller__inner");

    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as Element;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
};
