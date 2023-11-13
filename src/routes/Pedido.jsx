import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaRegTimesCircle} from 'react-icons/fa'
import '../scss/pedido.scss'

function Pedido() {

  //Hook useParams
  let {id} =useParams();

  //Hook useState

  const [novo, setNovo]= useState({
    id,
    nome:'',
    rua:'',
    complemento:''
  })
  //criando a variavel metodo post

  let metodo ='post'
  if(id){
    metodo='put'
  }

  const handleChange = (e)=>{
    setNovo({...novo, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/pedido/${id ? id:''}`,{
      method:metodo,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(novo),
    }).then(()=>{
        alert('Pedido Cadastrado')
        window.location= '/listarpedidos'
    });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/pedido/${id}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        setNovo(data)
      })
    }
  }, [id]);

  return(
  <>
    <div className='pedido'>
        <h1 className='titulocadastroPed'>Cadastro de Pedidos</h1>
        <form className='dados' onSubmit={handleSubmit}>
            <input
            className='inputPed'
            type="text"
            name="nome"
            value={novo.nome}
            placeholder="Digite o nome"
            onChange={handleChange}
            />
            <input
            className='inputPed'
            type="text"
            name="rua"
            value={novo.rua}
            placeholder="Digite a Rua"
            onChange={handleChange}
            />
            <input
            className='inputPed'
            type="text"
            name="complemento"
            value={novo.complemento}
            placeholder="Digite o complemento"
            onChange={handleChange}
            />
            <button className='botao'type="submit">Cadastrar</button>
            <Link to="/listaralunos">
            <FaRegTimesCircle/>
            </Link>
        </form>
    </div>
    
  </>
  )
  
}

export default Pedido;
