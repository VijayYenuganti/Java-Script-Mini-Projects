const menuBtn = document.getElementById('btnMenu');
const menuList = document.getElementById('menuList');

let opened = false;

menuBtn.addEventListener('click', () => {
  if (opened) {
    menuList.classList.remove('rotateIn');
    menuList.classList.add('rotateOut');
    opened = false;
  } else {
    menuList.classList.remove('rotateOut');
    menuList.classList.add('rotateIn');
    opened = true;
  }
});
