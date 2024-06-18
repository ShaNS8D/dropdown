const contentLink = document.querySelectorAll('.tab');

const t0 = performance.now();

contentLink.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        contentLink.forEach((el) => {
            if (el.classList.contains('tab_active')) {
                el.classList.remove('tab_active');
            }
        });
        elem.classList.add('tab_active');
        showTab(index);
    });
});

// for (i = 0; i < contentLink.length; i++) {
//     contentLink[i].addEventListener('click', function () {
//         for (j= 0; j < contentLink.length; j++) {
//             if (contentLink[j].classList.contains('tab_active')) {
//                 contentLink[j].classList.remove('tab_active');
//             }
//         }
//         this.classList.add('tab_active');
//         const index = Array.from(this.parentElement.children).indexOf(this);
//         showTab(index);
//     });
// }

const t1 = performance.now();
console.log(t1 - t0, 'milliseconds');

function showTab(tabId) {
  tabcontent = document.querySelectorAll('.tab__content');
//   for (i = 0; i < tabcontent.length; i++) {
//     if (tabcontent[i].classList.contains('tab__content_active')) {
//         tabcontent[i].classList.remove('tab__content_active');
//     }
//   }
  tabcontent.forEach((el) => {
    if (el.classList.contains('tab__content_active')) {
        el.classList.remove('tab__content_active');
    }
  });
  tabcontent[tabId].classList.add('tab__content_active');
}
