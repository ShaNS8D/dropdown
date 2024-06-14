// Получаем все элементы с классом 'dropdown__item'
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Функция для открытия/закрытия списка
function toggleDropdown() {
   const isActive = this.parentNode.classList.contains('dropdown__list_active');  
  if (isActive) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

// Функция для открытия списка
function openDropdown() {
  const list = document.querySelector('.dropdown__list');
  list.classList.add('dropdown__list_active');
  dropdownItems.forEach(item => item.addEventListener('click', toggleDropdown));
}

// Функция для закрытия списка
function closeDropdown() {
  const list = document.querySelector('.dropdown__list');
  list.classList.remove('dropdown__list_active');
  dropdownItems.forEach(item => item.removeEventListener('click', toggleDropdown));
}

// Функция для вывода названия
function showTitle()  {
  const title = document.querySelector('.dropdown__value');
  const value = this.querySelector('.dropdown__link').textContent;
  title.textContent = value;
}

// Добавляем обработчик клика к кнопке с выпадающим списком
document.querySelector('.dropdown').addEventListener('click', openDropdown);

const listLinks = document.querySelectorAll('.dropdown__link');
listLinks.forEach(item => item.addEventListener('click', showTitle));
