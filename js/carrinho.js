const arr = [
  {
    id: 1,
    nome_produto: 'Produto de teste',
    preco: '173,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  },
  {
    id: 2,
    nome_produto: 'Produto de teste 2',
    preco: '120,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  },
  {
    id: 3,
    nome_produto: 'Produto de teste 3',
    preco: '162,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  },
  {
    id: 4,
    nome_produto: 'Produto de teste 4',
    preco: '130,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  },

  {
    id: 5,
    nome_produto: 'Produto de teste 5',
    preco: '194,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  },
  {
    id: 6,
    nome_produto: 'Produto de teste 6',
    preco: '117,00',
    image:
      'https://media.istockphoto.com/photos/shoes-quality-isolated-product-picture-id666361284?b=1&k=20&m=666361284&s=170667a&w=0&h=8omjYnZfCpEzDvRPqFSo0wartAZTkPVPG5yHgD4Jk5Q='
  }
]

const body = document.querySelector('#initial')
const post_carrinho = document.querySelector('.pos-carrinho')
const slider = document.querySelector('.slide')
const container_carrinho = document.querySelector('.container-carrinho')
const total_carrinho = document.querySelector('.total-carrinho')
const carrinho = document.querySelector('.carrinho')
const opacity = document.querySelector('.opacity')
const sum = document.querySelector('.sumPrice')

// ADICIONAR ITENS SELECIONADOS NO LOCALSTORAGE E CRIAR CONTADOR TOTAL DO CARRINHO
function carrinho_de_compras(idCard) {
  const minhalista = localStorage.getItem('carrinho-compras')

  let produtosSalvos = JSON.parse(minhalista) || []

  const findItem = arr.find(item => item.id === idCard)

  if (produtosSalvos) {
    const hasProduct = produtosSalvos.find(carrin => {
      return carrin.id === idCard
    })
    if (hasProduct) {
      // alert('Esse item já está no carrinho')
      // return
    }
  }
  produtosSalvos.push(findItem)
  document.location.reload(true);

  const totalcarrinho = produtosSalvos.length
  localStorage.setItem('totalcarrinho', JSON.stringify(totalcarrinho))

  localStorage.setItem('carrinho-compras', JSON.stringify(produtosSalvos))

  localStorage.setItem('carrinho-compras', JSON.stringify(produtosSalvos))
  produtosSalvos = JSON.parse(minhalista)

  const total = localStorage.getItem('totalcarrinho')
  total_carrinho.innerHTML = total
}

const total = localStorage.getItem('totalcarrinho')

post_carrinho.innerHTML = total

// PRODUTOS NO LOCALSTORAGE
const produtosCarrinho = localStorage.getItem('carrinho-compras')
produtosSalvosCarrinho = JSON.parse(produtosCarrinho)

// LISTAR PRODUTOS NA INDEX
if(produtosSalvosCarrinho){
  produtosSalvosCarrinho.forEach(produto => {
    container_carrinho.innerHTML += `
      <div class="card-carrinho">
        <div class="img-carrinho">
          <img src="img/img-produto-carrinho.svg" alt="">
        </div>
  
        <div class="content">
          <p>${produto.nome_produto}</p>
        <div>
          <div class="button-carrinho">
            <button class="decrement">-</button> 1 <button class="increment">+</button>
          </div>
          <p>R$ ${produto.preco}</p>
        </div>
      </div>
  
      <div class="icon-close">
        <img src="img/close-orange.svg" alt="">
      </div>
      `
  })
}else{
  container_carrinho.innerHTML += `<h2 class="centertext"> Não existem produtos no carrinho </h2>`
}

// LISTAR PRODUTOS NA INDEX
arr.forEach(produto => {
  slider.innerHTML += `
    <div class="box">
            <div class="img">
            <img src="/img/img-produto.svg" alt="" />   
            </div>
  
            <div class="text">
              <p>${produto.nome_produto}</p>
            </div>
  
            <div class="info">
              <p class="value">R$${produto.preco}</p>
              <p>
                ou <strong>R$ 50,00</strong> em até <strong>4x</strong> sem juros
              </p>
            </div>
  
            <div class="button">
              <button onclick="carrinho_de_compras(${produto.id})">COMPRAR</button>
            </div>
            
          </div>
    
    `
})

//console.log(produtosSalvosCarrinho)

// FUNÇÕES PARA ABRIR E FECHAR O MODAL DO CARRINHO
function fecharcarrinho() {
  carrinho.classList.add('animation')
  setTimeout(function () {
    opacity.classList.toggle('active')
    body.style.overflow = 'initial'
  }, 500)
}

function abrircarrinho() {
  opacity.classList.toggle('active')
  carrinho.classList.remove('animation')
  body.style.overflow = 'hidden'
}

const formatedCarr = [...produtosSalvosCarrinho]

formatedCarr.forEach(produto => {
  produto.preco = parseInt(produto.preco)
})

var sumtotal = formatedCarr.reduce(getTotal, 0)
function getTotal(total, item) {
  return total + item.preco
}

sum.innerText = `${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumtotal)}`
