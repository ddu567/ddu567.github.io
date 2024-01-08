
const preview = document.querySelectorAll(".preview > img");
const tabBtns = document.querySelectorAll(".tabTitle > div");
const tabConts = document.querySelectorAll('.contentWrap > div');


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

