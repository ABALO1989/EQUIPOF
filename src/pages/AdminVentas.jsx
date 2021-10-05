import React, { useEffect, useState } from 'react';
import mas from 'media/anadir.png'
import { Link } from 'react-router-dom';
import editar from 'media/editar.png'




const AdminVentas = () => {

    const [IDVenta, setIDVenta] = useState('');
    const [FechaVenta, setFechaVenta] = useState('');


    useEffect(() => {
        console.log('mi nomnre es ale');
    }, []);

    {/* 1. forma de obtener el dato un campo del fomulario: 
creo una variable en un ARRAY com esta en la linea 8*, luego creo una
funcion que va a devolver el valor de dicho campo*. 2. otra forma mas simple es como esta en la linea 30, 
creo la funcion en el mismo onChange con los mismos pasos*/}

    const cambioIDVehiculo = (e) => {
        setIDVenta(e.target.value);
    }


    const enviarDatosBackend = () => {
        console.log('hola di clic al boton');

    }


    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>ADMINISTRACION DE VENTAS </h2>
                <h4 className='font-bold text-red-900 pt-10'>Filtros</h4>
                <div className="flex text-center">
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <label>Fecha Inicial <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' onChange={cambioIDVehiculo} type="date" /></label>
                            <label>Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="select" /></label>
                            <label>ID Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" /></label>
                        </form>
                    </div>
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <label>Fecha Inicial <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' onChange={cambioIDVehiculo} type="date" /></label>
                            <label>Fecha Final <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' onChange={cambioIDVehiculo} type="date" /></label>
                            <label>Cliente<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" /></label>
                        </form>
                    </div>
                </div>
                <div className='flex space-x-7 pb-5'>
                    <button onClick={enviarDatosBackend} className='buttonSecundario'>Limpiar</button>
                    <button onClick={enviarDatosBackend} className='buttonPrincipal'>Buscar</button>
                </div>
                <div className='flex flex-col'>
                    <table className='items-center'>
                        <thead>
                            <tr className='bg-yellow-50 '>
                                <th className='font-bold text-red-900 pl-5 pr-5'>ID Venta</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Fecha</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>ID Cliente</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Nombre Cliente</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Subtotal</th>
                                <th className='font-bold text-red-900 pl-5 pr-5'>Total Impuestos</th>
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

    )
}

export default AdminVentas
