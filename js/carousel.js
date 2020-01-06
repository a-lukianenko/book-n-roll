$(function() {
  $('.photo-block__photos').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.left'),
    nextArrow: $('.right'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  })

  $('.recommendations__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.leftArrow'),
    nextArrow: $('.rightArrow'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  })
})
