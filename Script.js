const myCarouselElement = document.querySelector('#carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const carouselNecklace = document.querySelector('#carouselNecklace')

const _carouselNecklace = new bootstrap.Carousel(carouselNecklace, {
  interval: 2000,
  touch: false
})