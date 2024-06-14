// Получаем все элементы с классом 'dropdown__item'
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Функция для открытия/закрытия списка
function toggleDropdown() {
  // Проверяем, есть ли у списка класс 'dropdown__list_active'
  const isActive = this.parentNode.classList.contains('dropdown__list_active');
  
  // Если список активен, закрываем его, иначе открываем
  if (isActive) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

// Функция для открытия списка
function openDropdown() {
  // Находим родительский элемент списка
  const list = this.parentNode;
  
  // Добавляем класс 'dropdown__list_active' к родительскому элементу списка
  list.classList.add('dropdown__list_active');
  
  // Добавляем обработчик клика ко всем элементам списка
  dropdownItems.forEach(item => item.addEventListener('click', toggleDropdown));
}

// Функция для закрытия списка
function closeDropdown() {
  // Находим родительский элемент списка
  const list = this.parentNode;
  
  // Удаляем класс 'dropdown__list_active' у родительского элемента списка
  list.classList.remove('dropdown__list_active');
  
  // Удаляем обработчики кликов со всех элементов списка
  dropdownItems.forEach(item => item.removeEventListener('click', toggleDropdown));
}

// Добавляем обработчик клика к кнопке с выпадающим списком
document.querySelector('.dropdown').addEventListener('click', openDropdown);