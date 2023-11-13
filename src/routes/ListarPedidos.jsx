import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaEdit, FaTrash} from 'react-icons/fa'
import '../scss/ListarPedidos.scss'

 function ListarPedido(){

    const [pedido, setPedidos]= useState([]);


    //promise assincrona

    useEffect(()=>{
    fetch('http://localhost:5000/pedido/')
    .then((resp)=> {
        return resp.json()
    }) 
    .then((resp)=> {
        setPedidos(resp)
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

const handleDelete = (id)=>{
    fetch(`http://localhost:5000/pedido/${id}`,{
        method:'delete'
    })
    .then(()=>{
        window.location='/listarpedidos'
    })
    .catch((error)=>{
        console.log(error)
    })
}

    return(
        <>
        <div className="ListarPedidos">
            <h1>Listar Pedidos</h1>
            <Link to="/incluir" className="inserir text-decoration-none">Inserir Pedido</Link>

            <table>
                <thead>
                    <tr>
                        <th>Nome da Instituição</th>
                        <th>Rua</th>
                        <th>Complemento</th>
                    </tr>
                </thead> 
                <tbody>
                    {pedido.map((ped) => (
                        <tr key={ped.id}>
                            <td>{ped.nome}</td>
                            <td>{ped.rua}</td>
                            <td>{ped.complemento}</td>
                            <td>
                                <Link to={`/editar/${ped.id}`}>
                                    <FaEdit/>
                                </Link>
                                <button className="fatrash" onClick={handleDelete.bind(this, ped.id)}>
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>      
            </table>
        </div>
        
        </>
    )
 }
 export default ListarPedido;