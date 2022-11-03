window.addEventListener("DOMContentLoaded", () => {
  // Collect Todo List
  const todo__list = document.querySelector(".todo__list");
  const todo__items = document.querySelectorAll("[data-item]");
  const todo__form = document.querySelector(".todo__form");
  const todo__form_input = document.querySelector("[data-todo-input]");

  // Todo Item
  let new__item;

  const Template = (string) => {
    const template__string = `
      <input type="checkbox" data-done />
      <span>${string}</span>
    `;
    const item = document.createElement("li");
    item.dataset.item = "";
    item.innerHTML = template__string;
    return item;
  };

  todo__form_input.addEventListener("keyup", (e) => {
    new__item = Template(e.target.value);
  });

  todo__form.addEventListener("submit", (e) => {
    e.preventDefault();
    todo__list.appendChild(new__item);
    todo__form_input.value = "";
  });

  todo__items.forEach((todo__item) => {
    const checkbox = todo__item.querySelector("input[data-done]");

    checkbox.addEventListener("change", (e) => {
      console.log(e);
      todo__item.classList.toggle("done");
    });
  });
});
