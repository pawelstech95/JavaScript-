const div = document.getElementById('status')

const statusBar = () => {
currentScroll = Math.round( window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100) ;

// console.log(currentScroll)
div.style.width = currentScroll + '%'
}


window.addEventListener('scroll', statusBar)