let navlinks = document.querySelectorAll(".navbar a");
let currentURL= window.location.href;

for (let i = 0; i < navlinks.length; i++) {
    if (navlinks[i]==currentURL) {
        navlinks[i].classList.add('active')
    }
}

function insertannoucement() {
    let today = new Date();
    console.log(today.getDay())
    if(today.getDay() == 5){
        document.getElementById('annoucementtext').innerHTML = 
        '<h3>Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.</h3>';
    } else {
    const bannershow = document.getElementById('annoucementtext');
    {bannershow.classList.add('notfriday')}
    }
}

function myFunction() {
    var x = document.getElementById("myNavBar");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
  }