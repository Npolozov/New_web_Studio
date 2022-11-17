const list = document.querySelector('.buttons-list'),
  items = document.querySelectorAll('.list-projects__item');

console.log(list);

function filter() {
  list.addEventListener('click', event => {
    const itemsId = event.target.dataset.id;
    console.log(itemsId);

    switch (itemsId) {
      case 'all':
        getItems('list-projects__item');
        break;
      case 'web':
        getItems(itemsId);
        break;
      case 'annex':
        getItems(itemsId);
        break;
      case 'design':
        getItems(itemsId);
        break;
      case 'marketing':
        getItems(itemsId);
        break;
    }
  });
}

filter();

function getItems(className) {
  items.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
