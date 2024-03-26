// Common
const bgOpacity = document.querySelector('.bgOpacity');

// Works
const preview = document.querySelectorAll(".preview > img");
const tabBtns = document.querySelectorAll(".tabTitle > div");
const tabConts = document.querySelectorAll('.contentWrap > div');

// preview click
preview.forEach((preview, index) => {
  preview.addEventListener('click', () => {
    tabBtns.forEach(otherBtn => {
      otherBtn.classList.remove('tabOn');
    });
    tabConts.forEach(othercont => {
      othercont.classList.remove('contentOn');
    });
    tabBtns[index].classList.add('tabOn');
    tabConts[index].classList.add('contentOn');
  })
})

// tab click
tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(otherBtn => {
      otherBtn.classList.remove('tabOn');
    });
    tabConts.forEach(othercont => {
      othercont.classList.remove('contentOn');
    });
    tabBtns[index].classList.add('tabOn');
    tabConts[index].classList.add('contentOn');
  });
});



// modal popup
const popup = document.querySelectorAll('.popup');
const modal = document.querySelector('.modal');
const contentTitle = document.querySelectorAll('.modalHead > li')
const contentList = document.querySelectorAll('.modalContent > li')
const close = document.querySelector('.modal span');

function closeFn() {
  modal.classList.remove('modalOn');
  bgOpacity.style.opacity = 0;
  contentTitle.forEach((title) => {
    title.style.display = 'none';
  });
  contentList.forEach((list) => {
    list.style.display = 'none';
  });
}

popup.forEach((pop, index) => {
  pop.style.cursor = 'pointer';
  pop.addEventListener('click', () => {
    closeFn();
    bgOpacity.style.opacity = 1;
    modal.classList.add('modalOn');
    contentTitle[index].style.display = 'block';
    contentList[index].style.display = 'block';
  });
});

// close modal
close.style.cursor = 'pointer';
close.addEventListener('click', () => {
  closeFn();
  // contentList.forEach((list) => {
  //   list.classList.remove('modalOn');
  // });
});

// esc close modal
window.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.key == "Escape") {
    closeFn();
    closeMenu();
  }
});


// media query
const menubar = document.querySelector('.menubar');
const nav = document.querySelector('nav');
const closedBtn = document.querySelector('.close');

const menuList = document.querySelectorAll('nav ul li');

function openMenu() {
  nav.style.display = 'block';
  bgOpacity.style.opacity = 1;
};
function closeMenu() {
  // nav.style.display = 'none';
  nav.style.removeProperty("display");
  bgOpacity.style.opacity = 0;
}

menubar.addEventListener('click', () => { openMenu() });
closedBtn.addEventListener('click', () => { closeMenu() });

// menuList.forEach((list)=> {
//   list.addEventListener('click', () => {closeMenu()
//   });
// });
