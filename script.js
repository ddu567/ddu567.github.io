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
const modalBg = document.querySelector('.modalWrap');
const modal = document.querySelector('.modal');
const contentTitle = document.querySelectorAll('.modalHead > li')
const contentList = document.querySelectorAll('.modalContent > li')
const close = document.querySelector('.modal span');

function closeFn() {
  modal.classList.remove('modalOn');
  modalBg.classList.remove('bg');
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
    modalBg.classList.add('bg');
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
  }
});
