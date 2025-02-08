import './style.css'
import { Link } from 'react-router-dom'

function Lancamento() {
    return (
        <div>
            <nav className='navBar'>
                <form>
                    <label class="fa-solid fa-magnifying-glass">
                        <input type="search" name='search' placeholder='Search' />
                    </label>
                </form>
                <Link to={"/"} className='linkButton'>Home</Link>
            </nav>
            
        </div>
    )
}

export default Lancamento