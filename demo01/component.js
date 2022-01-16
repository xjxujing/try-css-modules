import style from './style.css';

export default () => {
  const element = document.createElement("div");

  let DOM = `
    <div class="${ style.root }">
      <p class="${ style.text }">Scoped Selectors</p>
    </div>

    <div class="${ style.root }">
      <p class="text">Global Selectors</p>
    </div>
  `
  element.innerHTML = DOM;
  return element;
};