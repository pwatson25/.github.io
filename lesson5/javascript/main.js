let navlinks = document.querySelectorAll(".navbar a");
let currentURL= window.location.href;

for (let i = 0; i < navlinks.length; i++) {
    if (navlinks[i]==currentURL) {
        navlinks[i].classList.add('active')
    }
}