require('intersection-observer');

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const check_in_view = ($element) => {
  let observer = new IntersectionObserver((element) => {
    element.forEach((el) => {
      if(!el.isIntersecting) return;
      if (el.intersectionRatio > 0) {
        el.target.classList.add('in-view')
        observer.unobserve(el.target)
      }
    });
  }, observerOptions);
  $element.forEach((el) => {
    observer.observe(el);
  });
};

export { check_in_view };
