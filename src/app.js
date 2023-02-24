// SECTIONS **********

// NAV *****
const nav = document.querySelector('nav');

// NAV LEFT **
const navLeft = document.querySelector('#nav-left');
const logoContainer = document.querySelector('#logo-container');
const logo = document.querySelector('#company-logo');
const navLeftLinksContainer = document.querySelector('#nav-left-links');

// NAV RIGHT **
const navRight = document.querySelector('#nav-right');
const navRightLinksContainer = document.querySelector('#nav-right-links');


const navLinks = [
    {
        name: 'Menu',
        href: '/pages/menu'
    },
    {
        name: 'Order Online',
        href: '/pages/order'
    },
    {
        name: 'Happy Hour',
        href: '/pages/happyhour'
    },
    {
        name: 'Find Restaurant',
        href: '/pages/restaurants'
    },
    {
        name: 'Login',
        href: '/pages/login'
    },
    {
        name: 'Cart',
        href: '/pages/cart',
        icon: '<i class="fa-solid fa-basket-shopping"></i>'
    }
];

const navLinksLeft = 3;
const navLinksRight = 3;

// MAIN *****
const main = document.querySelector('main');

// FOOTER *****
const footer = document.querySelector('footer');


// CREATE PAGE *****
class Page {
    constructor() {
        this.createNav();
    }
    createNav = () => {
        this.setNavLinksLeft(navLinksLeft);
        this.setNavLinksRight(navLinksLeft, navLinksRight)
    }
    setNavLinksLeft = (total) => {
        let i = 0;
        while (i < total) {
            const newLink = document.createElement('a');
            newLink.setAttribute('href', navLinks[i].href);
            newLink.innerHTML = navLinks[i].name;

            navLeftLinksContainer.append(newLink);

            i++;
        }
    }
    setNavLinksRight = (skip, total) => {
        let i = skip;
        console.log(i)
        while (i < skip + total) {
            const newLink = document.createElement('a');
            newLink.setAttribute('href', navLinks[i].href);
            navLinks[i].icon ? newLink.innerHTML = navLinks[i].icon : newLink.innerHTML = navLinks[i].name;

            navRightLinksContainer.append(newLink);

            i++;
        }

    }
};

const createPage = new Page();