// Получаем все элементы с классом 'dropdown__item'
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(item => item.addEventListener('click', 
  () => {
  const title = document.querySelector('.dropdown__value');  
  const value = item.textContent;
  title.textContent = value;    
}));

// Функция для открытия/закрытия списка
function toggleDropdown() {
  const list  = document.querySelector('.dropdown__list');
  list.classList.toggle('dropdown__list_active');
}

// Добавляем обработчик клика к кнопке с выпадающим списком
document.querySelector('.dropdown').addEventListener('click', toggleDropdown);
