import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// import { Pagination } from 'swiper/modules';
// import Pagination from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const changer = function () {
  console.log('изменился размер окна')
  if (document.documentElement.clientWidth < 767.98) {
    console.log('меньше 767')

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
    // меню скрыто 320p
    document.querySelector('.menu').classList.add('hide')

    // кнопки
    let buttonOpenMenu = document.querySelector('.icon__menu')
    let buttonCloseMenu = document.querySelector('.menu__close-menu')

    let buttonOpenCall = document.querySelector('.icon__tel')
    let buttonCloseCall = document.querySelector('.modal__call .modal__close')

    let buttonOpenFeedback = document.querySelector('.icon__message')
    let buttonCloseFeedback = document.querySelector('.modal__feedback .modal__close')

    

    // селекторы
    let menu = document.querySelector('.menu')
    let content = document.querySelector('.content')
    let call = document.querySelector('.modal__call')
    let feedback = document.querySelector('.modal__feedback')


    // функции
    let showMenu = function () {
      menu.classList.remove('hide')
    }
    let hideMenu = function () {
      menu.classList.add('hide')
    }

    let showСontent = function () {
      content.classList.remove('hide')
    }
    let hideСontent = function () {
      content.classList.add('hide')
    }

    let showСall = function () {
      call.classList.remove('hide')
    }
    let hideСall = function () {
      call.classList.add('hide')
    }

    let showFeedback = function () {
      feedback.classList.remove('hide')
    }
    let hideFeedback = function () {
      feedback.classList.add('hide')
    }

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
  } else {
    console.log('больше 767')

    let buttonOpenCloseSwiper = document.querySelectorAll('.line__open-close')
    let buttonOpenSwiper = document.querySelectorAll('.line__open-close--open')
    let buttonCloseSwiper = document.querySelectorAll(
      '.line__open-close--close'
    )
    let swiper = document.querySelectorAll('.swiper-wrapper')

    //показываем-скрываем свайперы
    for (let i = 0; i < buttonOpenCloseSwiper.length; i++) {
      buttonOpenCloseSwiper[i].addEventListener('click', function () {
        swiper[i].classList.toggle('swiper-wrapper--height')
        buttonOpenSwiper[i].classList.toggle('hide')
        buttonCloseSwiper[i].classList.toggle('hide')
      })
    }

    //показываем свайперы
    // for (let i = 0; i < buttonOpenSwiper.length; i++) {
    //   buttonOpenSwiper[i].addEventListener('click', function () {
    //     swiper[i].classList.remove('swiper-wrapper--height')
    //     buttonOpenSwiper[i].classList.add('hide')
    //     buttonCloseSwiper[i].classList.remove('hide')
    //   })
    // }

    // //скрываем свайперы
    // for (let i = 0; i < buttonCloseSwiper.length; i++) {
    //   buttonCloseSwiper[i].addEventListener('click', function () {
    //     swiper[i].classList.add('swiper-wrapper--height')
    //     buttonOpenSwiper[i].classList.remove('hide')
    //     buttonCloseSwiper[i].classList.add('hide')
    //   })
    // }
  }
}
changer()

import '../scss/style.scss'

console.log('Works!')
