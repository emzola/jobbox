window.onscroll = function () {
  headerBarScroll()
}

const header = document.getElementById('headerBarSticky')

const sticky = header.offsetTop

function headerBarScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add('headerBarScroll')
  } else {
    header.classList.remove('headerBarScroll')
  }
}
