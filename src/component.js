import style from './style.css';

export default () => {
  const element = document.createElement("div");

  let DOM = `
    <h1 class="title">
      let's use CSS Modules!
    </h1>

    <h1 class="${style.title}">
      let's use CSS Modules!
    </h1>
  `
  element.innerHTML = DOM;
  return element;
};