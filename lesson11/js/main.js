
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

const hambutton = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar')

hambutton.addEventListener('click', () => {
    navbar.classList.toggle('responsive')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) navbar.classList.remove('responsive')
};

const thisYear = new Date();
let year = thisYear.getFullYear();
document.getElementById("currentYear").textContent = year;

const lastModDate = new Date(document.lastModified);
let strLMD = + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("lastUpdate").textContent = strLMD;