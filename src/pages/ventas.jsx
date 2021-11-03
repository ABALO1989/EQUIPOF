import React, { useEffect, useState, useRef } from 'react';
import mas from 'media/anadir.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { obtenerVentas, crearVenta, editarVenta, eliminarVenta } from 'utils/api';
import { Dialog, Tooltip } from '@material-ui/core';
import { nanoid } from 'nanoid';




const Ventas = () => {

    const form = useRef(null);

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Nueva Venta');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);


    useEffect(() => {
        const fetchVentas = async () => {
            await obtenerVentas(
                (response) => {
                    console.log('la respuesta que se recibio fue', response);
                    setVentas(response.data);
                    setEjecutarConsulta(false);

                },
                (error) => {
                    console.error('Salio un error:', error);

                }
            );
        };
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            fetchVentas();
        }
    }, [ejecutarConsulta]);


    useEffect(() => {
        //obtener lista de ventas desde el backend
        if (mostrarTabla) {
            setEjecutarConsulta(true);
        }
    }, [mostrarTabla]);



    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Nueva Venta')
        } else {
            setTextoBoton('Mostrar Todas las ventas')
        }
    }, [mostrarTabla]);




    return (
        <div >
            <h1 className='text-center font-extrabold text-red-900 pt-12'>MODULO DE VENTAS </h1>

            {mostrarTabla ? (
                <TablaVentas
                    listaVentas={ventas}
                    setEjecutarConsulta={setEjecutarConsulta}
                />
            ) : (
                <FormularioCreacionVentas
                    setMostrarTabla={setMostrarTabla}
                    listaVentas={ventas}
                    setVentas={setVentas}
                />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />

            <div className='flex flex-col items-center'>
                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className='buttonPrincipal '>
                    {textoBoton}

                </button>
            </div>

        </div>

    );


};





const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {

    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVentas]);

    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>ADMINISTRACION DE VENTAS </h2>
                <input
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder='Buscar'
                    className='border-2 border-gray-700 px-3 py-1 mx-7 self-start rounded-md focus:outline-none focus:border-indigo-500'
                />
                <div className='md:flex w-full'>
                    <table className='tabla'>
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
                        <tbody>
                            {ventasFiltradas.map((ventas) => {
                                return (
                                    <FilaVenta
                                        key={nanoid()}
                                        ventas={ventas}
                                        setEjecutarConsulta={setEjecutarConsulta}
                                    />
                                );
                            })}
                        </tbody>
                    </table>


                </div>

                <div className='flex flex-col w-full m-2 md:hidden'>
                    {ventasFiltradas.map((el) => {
                        return (
                            <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                                <span>{el.IDVenta}</span>
                                <span>{el.IDCliente}</span>
                                <span>{el.fecha}</span>
                                <span>{el.nombreCliente}</span>
                                <span>{el.valorTotal}</span>
                                <span>{el.vendedor}</span>
                            </div>
                        );
                    })}
                </div>
            </div >
        </div >

    );
};



const FilaVenta = ({ venta, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({
        _id: venta._id,
        IDVenta: venta.IDVenta,
        IDCliente: venta.IDCliente,
        fecha: venta.fecha,
        nombreCliente: venta.nombreCliente,
        valorTotal: venta.valorTotal,
        vendedor: venta.vendedor,
    });

    const actualizarVenta = async () => {
        //enviar la info al backend

        await editarVenta(
            venta._id,
            {
                IDVenta: infoNuevaVenta.IDVenta,
                IDCliente: infoNuevaVenta.IDCliente,
                fecha: infoNuevaVenta.fecha,
                nombreCliente: infoNuevaVenta.nombreCliente,
                valorTotal: infoNuevaVenta.valorTotal,
                vendedor: infoNuevaVenta.vendedor,

            },
            (response) => {
                console.log(response.data);
                toast.success('Venta modificada con éxito');
                setEdit(false);
                setEjecutarConsulta(true);
            },
            (error) => {
                toast.error('Error modificando la venta');
                console.error(error);
            }
        );
    };

    const deleteVenta = async () => {
        await eliminarVenta(
            venta._id,
            (response) => {
                console.log(response.data);
                toast.success('venta eliminada con éxito');
                setEjecutarConsulta(true);
            },
            (error) => {
                console.error(error);
                toast.error('Error eliminando la venta');
            }
        );

        setOpenDialog(false);
    };

    return (
        <tr>
            {edit ? (
                <>
                    <td>{infoNuevaVenta._id}</td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.IDVenta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, IDVenta: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.IDCliente}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, IDCliente: e.target.value })}
                        />
                    </td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.fecha}
                            onChange={(e) =>
                                setInfoNuevaVenta({ ...infoNuevaVenta, fecha: e.target.value })
                            }
                        />
                    </td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.nombreCliente}
                            onChange={(e) =>
                                setInfoNuevaVenta({ ...infoNuevaVenta, nombreCliente: e.target.value })
                            }
                        />
                    </td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.valorTotal}
                            onChange={(e) =>
                                setInfoNuevaVenta({ ...infoNuevaVenta, valorTotal: e.target.value })
                            }
                        />
                    </td>
                    <td>
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevaVenta.vendedor}
                            onChange={(e) =>
                                setInfoNuevaVenta({ ...infoNuevaVenta, vendedor: e.target.value })
                            }
                        />
                    </td>
                </>
            ) : (
                <>
                    <td>{venta._id.slice(20)}</td>
                    <td>{venta.IDVenta}</td>
                    <td>{venta.IDCliente}</td>
                    <td>{venta.fecha}</td>
                    <td>{venta.nombreCliente}</td>
                    <td>{venta.valorTotal}</td>
                    <td>{venta.vendedor}</td>
                </>
            )}

            <td>
                <div className='flex w-full justify-around'>
                    {edit ? (
                        <>
                            <Tooltip title='Confirmar Edición' arrow>
                                <i
                                    onClick={() => actualizarVenta()}
                                    className='fas fa-check text-green-700 hover:text-green-500'
                                />
                            </Tooltip>
                            <Tooltip title='Cancelar edición' arrow>
                                <i
                                    onClick={() => setEdit(!edit)}
                                    className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                                />
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title='Editar Venta' arrow>
                                <i
                                    onClick={() => setEdit(!edit)}
                                    className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                                />
                            </Tooltip>
                            <Tooltip title='Eliminar Venta' arrow>
                                <i
                                    onClick={() => setOpenDialog(true)}
                                    className='fas fa-trash text-red-700 hover:text-red-500'
                                />
                            </Tooltip>
                        </>
                    )}
                </div>

                <Dialog open={openDialog}>
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>
                            ¿Está seguro de querer eliminar la Venta?
                        </h1>
                        <div className='flex w-full items-center justify-center my-4'>
                            <button
                                onClick={() => deleteVenta()}
                                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                            >
                                Sí
                            </button>
                            <button
                                onClick={() => setOpenDialog(false)}
                                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
                            >
                                No
                            </button>
                        </div>
                    </div>
                </Dialog>
            </td>
        </tr>
    );
};


const FormularioCreacionVentas = ({ setMostrarTabla }) => {

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        await crearVenta(
            {
                IDVenta: nuevaVenta.IDVenta,
                IDCliente: nuevaVenta.IDCliente,
                fecha: nuevaVenta.fecha,
                nombreCliente: nuevaVenta.nombreCliente,
                valorTotal: nuevaVenta.valorTotal,
                vendedor: nuevaVenta.vendedor,
                codigo: nuevaVenta.codigo,
                cantidad: nuevaVenta.cantidad,
                valor: nuevaVenta.valor
            },

            (response) => {
                console.log(response.data);
                toast.success('Venta agregada con éxito');
            },
            (error) => {
                console.error(error);
                toast.error('Error creando un venta');
            }
        );


        setMostrarTabla(true);
    };



    return (
        <div>
            <div className='flex h-full w-full flex-col items-center justify-start p-8'>
                <h2 className='text-center font-extrabold text-red-900'>REGISTRO DE VENTA </h2>
                <div className="flex flex-col text-center">
                    <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                    <input name= 'IDVenta' className='border-b-2 border-gray-600  p-2 rounded-md m-1'  type ="text" placeholder='ID Venta' required/>
                    <input name='fecha' className='border-b-2 border-gray-600  p-2 rounded-md m-1' type ="date" placeholder='Fecha de Venta' />
                    <input name='valorTotal' className='border-b-2 border-gray-600  p-2 rounded-md m-1' type ="text" placeholder='Valor Total de la Venta' />
                    <input name= 'IDCliente' className='border-b-2 border-gray-600  p-2 rounded-md m-1' type ="text" placeholder='ID Cliente' />
                    <input name= 'nombreCliente' className='border-b-2 border-gray-600  p-2 rounded-md m-1' type ="text" placeholder='Nombre Cliente' />
                    <input name= 'vendedor' className='border-b-2 border-gray-600  p-2 rounded-md m-1' type ="text" placeholder='Vendedor' />

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
                    <td><input name= 'codigo' type ="text" placeholder='Codigo' /></td>
                    <td><input name='cantidad' type ="number" placeholder='Cantidad' /></td>
                    <td><input name= 'precioUnitario' type ="text" placeholder='Precio Unitario' /></td>
                    <td><input name='valor' type ="text" placeholder='Valor' /></td>
                    </tr>
                    </tbody>
                    </table>
                    </div>

                <div className='pt-10 pb-10'>
                    <button type='submit' className='buttonPrincipal'>Guardar Venta</button>
                </div>

            </form>
            </div>

        </div>
            
        </div >

    );
};


export default Ventas;