import React from "react";
import logo from "media/logoMueblesTic.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/stylesGu.css"
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Agustin", apellido: "Viera", usuario: "agusvie@gmail.com", tipoUsuario: "Administrador" },
  { id: 2, nombre: "María", apellido: "Aguilar", usuario: "mariaa@gmail.com", tipoUsuario: "Vendedor"  },
  { id: 3, nombre: "Pablo", apellido: "Alvarez", usuario: "pabal@gmail.com", tipoUsuario: "Vendedor"  },
  { id: 4, nombre: "Jose", apellido: "Bermudez", usuario: "berm@gmail.com", tipoUsuario: "Cliente"  },
  { id: 5, nombre: "Edward", apellido: "Salazar", usuario: "saled@gmail.com", tipoUsuario: "Cliente" },
  { id: 6, nombre: "Helena", apellido: "Mora del Campo", usuario: "campmora@gmail.com", tipoUsuario: "Cliente"  },
];

class GestionUsuarios extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      apellido: "",
      usuario: "",
      tipoUsuario: ""
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellido = dato.apellido;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Desea eliminar al "+dato.tipoUsuario+" "+dato.nombre+" "+dato.apellido);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="warning" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Usuario</th>
                <th>Tipo de Usuario</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.usuario}</td>
                  <td>{dato.tipoUsuario}</td>
                  <td>
                    <Button
                      color="success"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="dark" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellidos: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellido}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Usuario: 
              </label>
              <input
                className="form-control"
                name="usuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.usuario}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Tipo de Usuario: <br />
                Administrador/ Vendedor/ Cliente 
              </label>
              <input
                className="form-control"
                name="tipoUsuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipoUsuario}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="dark"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Appelidos: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Usuario: 
              </label>
              <input
                className="form-control"
                name="usuario"
                type="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Tipo de Usuario:<br />
                Administrador/ Vendedor/ Cliente 
              </label>
              <input
                className="form-control"
                name="tipoUsuario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.insertar()}
            >
              Crear
            </Button>
            <Button
              color="dark"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default GestionUsuarios;