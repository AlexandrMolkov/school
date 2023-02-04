

const swiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
  },
})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)
    console.log(blockID)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



window.addEventListener('resize', () =>  {
  if(window.innerWidth > 1319) {
    document.body.classList.remove(`lock`)
    document.querySelector(document.querySelector(`.burg`).dataset.target).classList.remove(`show`)
    document.querySelector(`.burg`).classList.remove(`open`)
  }
});