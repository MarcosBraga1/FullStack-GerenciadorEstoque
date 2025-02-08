import './style.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { useEffect, useState } from 'react'

function Home() {
  // Estado que armazena os itens presentes no banco de dados
  const [items, setItems] = useState([])

  async function getItems() {
    const itemsFromApi = await api.get('/')
    setItems(itemsFromApi.data)
  }

  // Coleta os items do banco de dados assim que a página é carregada
  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      <nav className='navBar'>
        <form>
          <label class="fa-solid fa-magnifying-glass">
            <input type="search" name='search' placeholder='Search' />
          </label>
        </form>
        <Link to={"/lancamentos"} className='linkButton'>Lançamentos</Link>
      </nav>
      <div className='content'>
        <main>
          <div className='card header'>
            <p>Nome</p>
            <p>Código do produto</p>
            <p>Nº Nota Fiscal</p>            
            <p>Quantidade</p>
            <p>Preço</p>
          </div>
          {items.map(item => (
            <div className='card item'>
              <p>{item.name}</p>
              <p>{item.code}</p>
              <p>{item.invoiceNum}</p>              
              <p>{item.amount}</p>
              <p>R${item.price}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Home
