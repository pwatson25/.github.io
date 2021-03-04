function toggleHam() {
  document.getElementsByClassName('nav-bar')[0].classList.toggle('responsive');
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



  WebFont.load({
    google: {
      families: ['Roboto', 'Oswald']
    }
  });