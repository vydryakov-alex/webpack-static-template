import { menu, content, main, call, feedback, swiper } from './selectors.js'

// функции
export let showMenu = function () {
  menu.classList.remove('hide')
}
export let hideMenu = function () {
  menu.classList.add('hide')
}

export let showСontent = function () {
  content.classList.remove('hide')
}
export let hideСontent = function () {
  content.classList.add('hide')
}
export let greyСontent = function () {
  content.classList.toggle('grey')
}
export let greyMain = function () {
  main.classList.toggle('grey')
}

export let showСall = function () {
  call.classList.remove('hide')
}
export let hideСall = function () {
  call.classList.add('hide')
}

export let showFeedback = function () {
  feedback.classList.remove('hide')
}
export let hideFeedback = function () {
  feedback.classList.add('hide')
}
