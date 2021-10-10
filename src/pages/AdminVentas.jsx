import React, { useEffect, useState } from 'react';
import mas from 'media/anadir.png'
import { Link } from 'react-router-dom';
import editar from 'media/editar.png'




const Ventas = () => {

    const [BuscarVenta, setBuscarVenta] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Venta');

    useEffect(() => {
        if(BuscarVenta){
            setTextoBoton('Registrar Venta')
        } else{
            setTextoBoton('Mostrar Todas las ventas')
        }
    } , [BuscarVenta]);
    

    return (
        <div >
            <h2 className='text-center font-extrabold text-red-900'>ADMINISTRACION DE VENTAS </h2>
            <button 
             onClick={()=>{
                setBuscarVenta(!BuscarVenta); 
            }}
                className='buttonPrincipal'>
                {textoBoton}

            </button>
            {BuscarVenta ? <administrarVentas/>:<nuevaVenta/>}
            
        </div>

    );


};



const nuevaVenta = () => {
    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>REGISTRO DE VENTA </h2>
                <div className="flex text-center">
                    <div className="w-1/2 pl-20 pr-20 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" placeholder='ID Venta' />
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="date" placeholder='Fecha de Venta' />
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" placeholder='Valor Total de la Venta' />
                        </form>
                    </div>
                    <div className="w-1/2 pl-20 pr-20 pt-10 pb-10">
                        <form className='flex flex-col'>
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" placeholder='ID Cliente' />
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" placeholder='Nombre Cliente' />
                            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" placeholder='Vendedor' />
                        </form>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <table>
                        <thead>
                            <tr className='bg-yellow-50'>
                                <th className='font-bold text-red-900'>Codigo</th>
                                <th className='font-bold text-red-900'>Cantidad</th>
                                <th className='font-bold text-red-900'>Precio Unitario</th>
                                <th className='font-bold text-red-900'> Valor</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td><input type="text" placeholder='Codigo' /></td>
                                <td><input type="number" placeholder='Cantidad' /></td>
                                <td><input type="text" placeholder='Precio Unitario' /></td>
                                <td><input type="text" placeholder='Valor' /></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder='Codigo' /></td>
                                <td><input type="number" placeholder='Cantidad' /></td>
                                <td><input type="text" placeholder='Precio Unitario' /></td>
                                <td><input type="text" placeholder='Valor' /></td>
                            </tr>
                            <tr>
                                <td><input type="text" placeholder='Codigo' /></td>
                                <td><input type="number" placeholder='Cantidad' /></td>
                                <td><input type="text" placeholder='Precio Unitario' /></td>
                                <td><input type="text" placeholder='Valor' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Link className='flex p-5'>
                        <img className='w-6' src={mas} alt="mas" />
                    </Link>
                </div>
                <div className='flex space-x-7 pt-10 pb-10'>
                    <button className='buttonSecundario'>Ver Ventas</button>
                    <button className='buttonPrincipal'>Registrar Venta</button>
                </div>
            </div>

        </div>

    );
};

const administrarVentas = () => {
    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>ADMINISTRACION DE VENTAS </h2>
                <h4 className='font-bold text-red-900 pt-10'>Filtros</h4>
                <div className="flex text-center">
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <label>Fecha Inicial <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="date" /></label>
                            <label>Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="select" /></label>
                            <label>ID Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" /></label>
                        </form>
                    </div>
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <label>Fecha Inicial <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="date" /></label>
                            <label>Fecha Final <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="date" /></label>
                            <label>Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" /></label>
                        </form>
                    </div>
                </div>
                <div className='flex space-x-7 pb-5'>
                    <button className='buttonSecundario'>Limpiar</button>
                    <button className='buttonPrincipal'>Buscar</button>
                </div>
                <div className='flex flex-col'>
                    <table className='items-center'>
                        <thead>
                            <tr className='bg-yellow-50 '>
                                <th className='font-bold text-red-900 pl-5 pr-5'>ID Venta</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Fecha</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>ID Cliente</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Nombre Cliente</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Valor Total</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Vendedor</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Actualizar</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='items-center'>
                                    <Link className='flex p-5'>
                                        <img className='w-5' src={editar} alt="mas" />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    );
};


export default Ventas;