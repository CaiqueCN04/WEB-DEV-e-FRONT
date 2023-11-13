import {} from 'react'
import {Link} from 'react-router-dom'
import '../scss/Nav.scss'

function Nav() {
  

return (
    <>

        <nav className='d-md-flex'>

        

            <Link to="/" className='text-decoration-none text-dark'><h2>Otoko Tekhne Nashi</h2></Link>

            


                <div className='ul'>
                    
                    <ul className='d-md-flex'>                    
                        <li className='btn btn-secondary '><Link to="/Contextualizacao" className='text-decoration-none text-light'>Contextualização</Link></li>
                        <li className='btn btn-secondary '><Link to="/Problema" className='text-decoration-none text-light'>Problema</Link></li>
                        <li className='btn btn-secondary '><Link to="/Causas" className='text-decoration-none text-light'>Causas</Link></li>
                        <li className='btn btn-secondary '><Link to="/Casos" className='text-decoration-none text-light'>Casos</Link></li>
                        <li className='btn btn-secondary '><Link to="/ProblemaxSolucao" className='text-decoration-none text-light'>Problema x Solucao</Link></li>
                        <li className='btn btn-secondary'><Link to="/Login" className='text-decoration-none text-light'>Login</Link></li>
                    </ul>
                    
                    
                </div>
                <div className='ul dropdown'>
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Outros
                    </button>
                    <ul className='dropdown-menu dropdown-menu-dark'>
                        <li className='btn btn-secondary dropdown-item'><Link to="/pedido" className='text-decoration-none text-light'>Cadastar</Link></li>
                        <li className='btn btn-secondary dropdown-item'><Link to="/listarpedidos" className='text-decoration-none text-light'>Listar Pedido</Link></li>
                    </ul>
                </div>
        

    </nav>
    </>
)
}
  
export default Nav


  
