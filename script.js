// Common
const bgOpacity = document.querySelector('.bgOpacity');

// Works Section
const preview = document.querySelectorAll(".preview > img");
const tabBtns = document.querySelectorAll(".tabTitle > div");
const tabConts = document.querySelectorAll('.contentWrap > div');

// Preview click event to switch tabs
preview.forEach((preview, index) => {
  preview.addEventListener('click', () => {
    switchTab(index);
  });
});

// Tab click event to switch tabs
tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    switchTab(index);
  });
});

// Function to switch tabs
function switchTab(index) {
  tabBtns.forEach(otherBtn => {
    otherBtn.classList.remove('tabOn');
  });
  tabConts.forEach(othercont => {
    othercont.classList.remove('contentOn');
  });
  tabBtns[index].classList.add('tabOn');
  tabConts[index].classList.add('contentOn');
}

// Modal Popup
const popup = document.querySelectorAll('.popup');
const modal = document.querySelector('.modal');
const contentTitle = document.querySelectorAll('.modalHead > li');
const contentList = document.querySelectorAll('.modalContent > li');
const close = document.querySelector('.modal span');
const header = document.querySelector('header');

// Create and return a modal background element
function createModalBackground() {
  const modalBg = document.createElement('div');
  modalBg.classList.add('modal-bg');
  modalBg.addEventListener('click', () => {
    closeFn();
  });
  return modalBg;
}

// Open modal with background and adjust layout for scrollbar
function openModal() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  header.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.classList.add('modal-open');
}

// Close modal and reset layout adjustments
function closeModal() {
  header.style.paddingRight = '';
  document.body.style.paddingRight = '';
  document.body.classList.remove('modal-open');
}

// Close modal and remove background
function closeFn() {
  modal.classList.remove('modalOn');
  const modalBg = document.querySelector('.modal-bg');
  if (modalBg) {
    modalBg.remove();
  }
  if (!nav.classList.contains('open')) {
    bgOpacity.style.opacity = 0;
    bgOpacity.style.pointerEvents = 'none';
  }
  closeModal();
  hideModalContent();
}

// Hide modal content
function hideModalContent() {
  contentTitle.forEach((title) => {
    title.style.display = 'none';
  });
  contentList.forEach((list) => {
    list.style.display = 'none';
  });
}

// Open modal and display content
popup.forEach((pop, index) => {
  pop.style.cursor = 'pointer';
  pop.addEventListener('click', () => {
    const modalBg = createModalBackground();
    document.body.appendChild(modalBg);
    modal.classList.add('modalOn');
    openModal();
    displayModalContent(index);
  });
});

// Display content of the modal
function displayModalContent(index) {
  contentTitle[index].style.display = 'block';
  contentList[index].style.display = 'block';
}

// Close modal on close button click
close.style.cursor = 'pointer';
close.addEventListener('click', () => {
  closeFn();
});

// Close modal by clicking outside the modal
bgOpacity.addEventListener('click', () => {
  if (modal.classList.contains('modalOn')) {
    closeFn();
  }
});

// Close modal on Escape key press
window.addEventListener('keyup', e => {
  if (e.key === "Escape") {
    closeFn();
    closeMenu();
  }
});

// Mobile menu
const menubar = document.querySelector('.menubar');
const nav = document.querySelector('nav');
const closedBtn = document.querySelector('.close');

// Open mobile menu
function openMenu() {
  nav.classList.add('open');
  bgOpacity.style.opacity = 1;
  bgOpacity.style.pointerEvents = 'auto';
}

// Close mobile menu
function closeMenu() {
  nav.classList.remove('open');
  if (!modal.classList.contains('modalOn')) {
    bgOpacity.style.opacity = 0;
    bgOpacity.style.pointerEvents = 'none';
  }
}

// Add event listeners to menu buttons
menubar.addEventListener('click', () => { openMenu(); });
closedBtn.addEventListener('click', () => { closeMenu(); });

// Close menu on window resize if wider than 521px
window.addEventListener('resize', () => {
  if (window.innerWidth > 521) {
    closeMenu();
  }
});

// Close menu by clicking outside the menu
bgOpacity.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    closeMenu();
  }
});
