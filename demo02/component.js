import style from './style.css';

export default () => {
  const element = document.createElement("div");

  let DOM = `
    <div class="${style.root}">
      <p class="${style.text}">Style Variant A</p>
    </div>

    <div class="${style.root}">
      <p class="${style.text}">Unlock the comment to see Overrides's effect</p>
    </div>
  `
  element.innerHTML = DOM;
  return element;
};