const header = document.querySelector('.header');
const navigation = header.querySelector('.header__navigation');
const burger = navigation.querySelector('.header__burger');

if (burger) {
    burger.addEventListener('click', () => {
        navigation.classList.toggle('header__navigation--open');
    });
}
