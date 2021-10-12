import React, { useEffect, useState } from 'react';
import mas from 'media/anadir.png'
import { Link } from 'react-router-dom';
import editar from 'media/editar.png'


const ventasBackend =[
    {
        IDVenta:'FV-01',
        Fecha: '01/04/2020',
        IDCliente: '1111',
        NombreCliente: 'Pepito Perez',
        ValorTotal: '500.000',
        Vendedor: 'Juan'
    },
    {
        IDVenta:'FV-02',
        Fecha: '15/04/2020',
        IDCliente: '1122',
        NombreCliente: 'Juanito Hoyos',
        ValorTotal: '700.000',
        Vendedor: 'Pedro'
    },
    {
        IDVenta:'FV-03',
        Fecha: '18/09/2020',
        IDCliente: '1133',
        NombreCliente: 'Martin Sanchez',
        ValorTotal: '800.000',
        Vendedor: 'Pedro'
    },

]

const Ventas = () => {
 
    const [BuscarVenta, setBuscarVenta] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Nueva Venta');
    const [ventasRegistradas, setVentasRegistradas] = useState ([]);
    
    useEffect (() => {
        //obtener lista de ventas del backend
        setVentasRegistradas(ventasBackend);

    }, []);

    useEffect(() => {
        if(BuscarVenta){
            setTextoBoton('Nueva Venta')
        } else{
            setTextoBoton('Mostrar Todas las ventas')
        }
    } , [BuscarVenta]);
    

    return (
        <div >
            <h1 className='text-center font-extrabold text-red-900 pt-12'>MODULO DE VENTAS </h1>
            
            {BuscarVenta ? (
            <AdministrarVentas listaVentas={ventasRegistradas}/>
            ): (
            <NuevaVenta/>)
            }
            <div className='flex flex-col items-center'>
            <button 
             onClick={()=>{
                setBuscarVenta(!BuscarVenta); 
            }}
                className='buttonPrincipal '>
                {textoBoton}

            </button>
            </div>
            
        </div>

    );


};



const NuevaVenta = () => {

    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState (false);


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
                    <button  
                    onClick = {() => setMostrarCamposAdicionales (!mostrarCamposAdicionales)}
                    className='flex p-5'>
                        <img className= 'w-5' src={mas} alt="más" />
                        
                    </button>

                    {mostrarCamposAdicionales &&
                    <div>
                      <div>
                      <td><input type="text" placeholder='Codigo' /></td>
                                <td><input type="number" placeholder='Cantidad' /></td>
                                <td><input type="text" placeholder='Precio Unitario' /></td>
                                <td><input type="text" placeholder='Valor' /></td>
            </div>
                    </div>

                    }
                </div>

                <div className='pt-10 pb-10'>
                    <button className='buttonPrincipal'>Guardar Venta</button>
                </div>
            </div>

        </div>

    );
};

const AdministrarVentas = ({listaVentas}) => {
    
    useEffect(() => {
        console.log ('Este es el listado de vehiculos en el componnete de adminVentas', listaVentas)
    }, [listaVentas]);
    
    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>ADMINISTRACION DE VENTAS </h2>
                <h4 className='font-bold text-red-900 pt-10'>Filtros</h4>
                <div className="flex text-center">
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <label>Fecha Inicial <input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="date" /></label>
                            <label>ID Venta<input className='border-b-2 border-gray-600  p-2 rounded-md m-1' type="text" /></label>
                        </form>
                    </div>
                    <div className="w-1/2 pl-10 pr-10 pt-10 pb-10 ">
                        <form className='flex flex-col'>
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
                            {listaVentas.map((ventasRegistradas)=>{
                                return (
                                    <tr className='text-center'>
                                    <td>{ventasRegistradas.IDVenta}</td>
                                    <td>{ventasRegistradas.Fecha}</td>
                                    <td>{ventasRegistradas.IDCliente}</td>
                                    <td>{ventasRegistradas.NombreCliente}</td>
                                    <td>{ventasRegistradas.ValorTotal}</td>
                                    <td>{ventasRegistradas.Vendedor}</td>
                                    <td className='items-center'>
                                        <Link className='flex p-5'>
                                            <img className='w-5' src={editar} alt="mas" />
                                        </Link>
                                    </td>
                                </tr>
                                
                                )
                            })}
                             </tbody>
                    </table>
 
                </div>
            </div>

        </div>

    );
};


export default Ventas;