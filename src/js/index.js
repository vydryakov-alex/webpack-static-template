import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import '../scss/style.scss'

//селекторы
import {
  menu,
  content,
  main,
  call,
  feedback,
  swiper
} from './modules/selectors.js'

//кнопки
import {
  buttonOpenMenu,
  buttonCloseMenu,
  buttonOpenCall,
  buttonOpenCall2,
  buttonCloseCall,
  buttonOpenFeedback,
  buttonOpenFeedback2,
  buttonCloseFeedback,
  buttonOpenCloseSwiper,
  buttonOpenSwiper,
  buttonCloseSwiper
} from './modules/buttons.js'

//функции модалок

import {
  showMenu,
  hideMenu,
  showСontent,
  hideСontent,
  greyСontent,
  greyMain,
  showСall,
  hideСall,
  showFeedback,
  hideFeedback
} from './modules/function_modal.js'

const changer = function () {
  console.log('размер окна:', document.documentElement.clientWidth)
  if (document.documentElement.clientWidth < 767.99) {
    // 320p-----------------------------------------------
    console.log('меньше 767')

    // меню скрыто
    document.querySelector('.menu').classList.add('hide')

    //запускаем свайпер
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1.19,
      // shadow: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
        // type: 'bullets',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false
      },

      mousewheel: {
        invert: true
      }
    })

    window.addEventListener('click', function (evt) {
      //открываем меню
      if (evt.target === buttonOpenMenu) {
        showMenu()
        hideСontent()
      }

      //закрываем меню
      if (evt.target === buttonCloseMenu) {
        hideMenu()
        showСontent()
      }

      //открываем call
      if (evt.target === buttonOpenCall) {
        // показываем call
        console.log('нажата call')
        showСall()
        // скрываем меню
        hideMenu()
      }

      // закрываем call
      if (evt.target === buttonCloseCall) {
        // скрываем call
        hideСall()
        // показываем меню
        showMenu()
      }

      // показываем feedback
      if (evt.target === buttonOpenFeedback) {
        showFeedback()
        hideMenu()
      }

      // скрываем feedback
      if (evt.target === buttonCloseFeedback) {
        hideFeedback()
        showMenu()
      }
    })
  } else if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1439
  ) {
    // 768p-----------------------------------------------

    console.log('больше 768 и меньше 1440')

    // меню скрыто
    document.querySelector('.menu').classList.add('hide')

    window.addEventListener('click', function (evt) {
      console.log('wind target', evt.target)
      console.log('wind currentTarget', evt.currentTarget)

      //закрываем меню
      if (
        !menu.classList.contains('hide') &&
        (evt.target === buttonCloseMenu || !evt.target.closest('.menu'))
      ) {
        hideMenu()
        greyСontent()
      }

      //открываем меню
      if (evt.target === buttonOpenMenu) {
        showMenu()
        greyСontent()
      }

      // закрываем call
      if (
        !call.classList.contains('hide') &&
        (evt.target === buttonCloseCall || !evt.target.closest('.modal__call'))
      ) {
        hideСall()
        greyСontent()
      }

      //открываем call
      if (evt.target === buttonOpenCall2) {
        showСall()
        greyСontent()
      }

      // закрываем feedback
      if (
        !feedback.classList.contains('hide') &&
        (evt.target === buttonCloseFeedback ||
          !evt.target.closest('.modal__feedback'))
      ) {
        hideFeedback()
        greyСontent()
      }

      // открываем feedback
      if (evt.target === buttonOpenFeedback2) {
        showFeedback()
        greyСontent()
      }
    })
  } else {
    // 1440p-----------------------------------------------
    console.log('больше 1440')

    window.addEventListener('click', function (evt) {
      console.log('wind target', evt.target)
      console.log('wind currentTarget', evt.currentTarget)

      // закрываем call
      if (
        !call.classList.contains('hide') &&
        (evt.target === buttonCloseCall || !evt.target.closest('.modal__call'))
      ) {
        hideСall()
        greyMain()
      }

      //открываем call
      if (evt.target === buttonOpenCall) {
        showСall()
        greyMain()
      }

      // закрываем feedback
      if (
        !feedback.classList.contains('hide') &&
        (evt.target === buttonCloseFeedback ||
          !evt.target.closest('.modal__feedback'))
      ) {
        hideFeedback()
        greyMain()
      }

      // открываем feedback
      if (evt.target === buttonOpenFeedback) {
        showFeedback()
        greyMain()
      }
    })
  }
}

console.log('Works!')

// ----------------------------------------------------

//показываем-скрываем свайперы
for (let i = 0; i < buttonOpenCloseSwiper.length; i++) {
  buttonOpenCloseSwiper[i].addEventListener('click', function () {
    swiper[i].classList.toggle('swiper-wrapper--height')
    buttonOpenSwiper[i].classList.toggle('hide')
    buttonCloseSwiper[i].classList.toggle('hide')
  })
}

changer()

//media-------------------------------------------
const mobileWidthMediaQuery = window.matchMedia(
  '(min-width: 0px) and (max-width: 767.98px)'
)
const tabletWidthMediaQuery = window.matchMedia(
  '(min-width: 768px) and (max-width: 1439.98px)'
)
const desctopWidthMediaQuery = window.matchMedia('(min-width: 1440px)')

window.addEventListener('resize', function () {
  console.log('изменился размер окна')

  /////////////////////////////media 320p
  if (mobileWidthMediaQuery.matches) {
    console.log('листенер 320')
    changer()
  }

  /////////////////////////////media 768p
  if (tabletWidthMediaQuery.matches) {
    console.log('листенер 768')
    changer()
  }

  /////////////////////////////media 1440p
  if (desctopWidthMediaQuery.matches) {
    console.log('листенер 1440')
    changer()
  }
})
