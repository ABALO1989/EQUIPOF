import React, { useEffect, useState } from 'react';
import mas from 'media/anadir.png'
import { Link } from 'react-router-dom';




const NuevaVenta = () => {

  const [IDVenta, setIDVenta] = useState('');
  const [FechaVenta, setFechaVenta] = useState('');


  useEffect(() => {
    console.log('mi nomnre es ale');
  }, []);

  {/* 1. forma de obtener el dato un campo del fomulario: 
creo una variable en un ARRAY com esta en la linea 8*, luego creo una
funcion que va a devolver el valor de dicho campo*. 2. otra forma mas simple es como esta en la linea 30, 
creo la funcion en el mismo onChange con los mismos pasos*/}

  const cambioIDVenta = (e) => {
    setIDVenta(e.target.value);
  }


  const enviarDatosBackend = () => {
    console.log('hola di clic al boton');

  }


  return (
    <div>
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <h2 className='text-center font-extrabold text-red-900'>REGISTRO DE VENTA </h2>
      <div className="flex text-center">
        <div className="w-1/2 pl-20 pr-20 pt-10 pb-10 ">
          <form className='flex flex-col'>
            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' onChange={cambioIDVenta} type="text" placeholder='ID Venta' />
            <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' onChange={(e) => { setFechaVenta(e.target.value); }} value= {FechaVenta}type="date" placeholder='Fecha de Venta' />
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
          <img className='w-6'src={mas} alt="mas" />
          </Link>
          </div>
        <div className='flex space-x-7 pt-10 pb-10'>
        <button onClick={enviarDatosBackend} className='buttonSecundario'>Ver Ventas</button>
          <button onClick={enviarDatosBackend} className='buttonPrincipal'>Registrar Venta</button>
      </div>
    </div>
    
    </div>

  )
}

export default NuevaVenta
