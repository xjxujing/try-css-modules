import style from './style.css';

export default () => {
  const element = document.createElement('div');

  let DOM = `
    <div class="${style.root}">
      <p class="${style.text}">Use value to define text's color</p>
    </div>
  `;
  element.innerHTML = DOM;
  return element;
};
