const searchInput = document.querySelector('.toogle.searchfunction img')
const searchResponsive = document.querySelector('.search.responsive')
const toogle = document.querySelector('.toogle')
const opacityToogle = document.querySelector('.toogleMenu')

// ATIVAR INPUT SEARCH E TROCA ICONE
function activeSearchInput() {
  searchResponsive.classList.toggle('active')
  const closeAttribute = searchInput.getAttribute('src')
  if (closeAttribute === '/img/search-icon.svg') {
    searchInput.setAttribute('src', '/img/close.svg')
    return
  }
  searchInput.setAttribute('src', '/img/search-icon.svg')
}

// ATIVAR MENU TOOGLE RESPONSIVO
function menuToogle() {
  opacityToogle.classList.toggle('active')
}
