const input = document.querySelector('input');
const list = document.querySelector('ul');


const addProduct = () => {

  const item = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type' , 'checkbox');
  const itemText = document.createElement('span');

  listItem.appendChild(checkbox);
  listItem.appendChild(itemText);
  itemText.innerText = item;
  list.appendChild(listItem);

};
