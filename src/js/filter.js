const list = document.querySelector('.buttons-list');
const items = document.querySelectorAll('.list-projects__item');

function filter() {
  list.addEventListener('click', event => {
    const itemsId = event.target.dataset.id;

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
