let navlinks = document.querySelectorAll(".navbar a");
let currentURL= window.location.href;

for (let i = 0; i < navlinks.length; i++) {
    if (navlinks[i]==currentURL) {
        navlinks[i].classList.add('active')
    }
}

let today = new Date();

if(today.getDay() == 5){
    document.getElementById('day-text').innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
};