const scrolling = () => {

    let links = document.querySelectorAll('[data-goto]'); 

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const menuLink = e.target;
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            // const topOffset = document.querySelector('.header').offsetHeight;
            const toBlock = gotoBlock.getBoundingClientRect().top;
            // const offsetPosition = toBlock - topOffset;

            window.scrollBy({
                top: toBlock,
                behavior: 'smooth'
            })
        })
    });
};

export default scrolling;