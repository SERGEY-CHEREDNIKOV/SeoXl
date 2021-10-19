const burger = () => {
    const burgerMenu = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const navigationLink = document.querySelectorAll('.navigation__item-link');

    burgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('menu--open');
        burgerMenu.classList.toggle('burger--active');
        document.body.classList.toggle('overflow');
    });

    navigationLink.forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('menu--open');
            burgerMenu.classList.remove('burger--active');
            document.body.classList.remove('overflow');
        });
    }); 
};

export default burger;