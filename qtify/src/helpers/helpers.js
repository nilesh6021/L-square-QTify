export const truncate = (text, len = 25) => {
  if (!text) return "";
  return text.length > len ? text.slice(0, len) + "..." : text;
};

export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};