const hamburger: Element = document.querySelector('.hamburger')!;
const toggle = (): void => {
  document.querySelector('.nav-links')?.classList.toggle('expanded');
};
hamburger.addEventListener('click', toggle);
