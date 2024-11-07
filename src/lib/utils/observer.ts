export const observer = (node: Element, options = {}) => {
  const callback = (entries: any[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) node.dispatchEvent(new CustomEvent('enterViewport'));
      else node.dispatchEvent(new CustomEvent('exitViewport'));
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(node);
  return {
    destroy() {
      observer.unobserve(node);
    }
  };
};
