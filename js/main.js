window.onscroll = function () {
  headerBarScroll()
}

const header = document.getElementById('headerBar')

const sticky = header.offsetTop

function headerBarScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add('headerBarScroll')
  } else {
    header.classList.remove('headerBarScroll')
  }
}
