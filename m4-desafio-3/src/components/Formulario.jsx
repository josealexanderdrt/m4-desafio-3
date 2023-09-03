import { useState } from "react";
import Button from "react-bootstrap/Button";

const Formulario = ({
  setAlert,
  addColaborador,
  data,
  setData,
  dataFilter,
  setDataFiltler,
}) => {
  const [datosColaborador, setDatosColaborador] = useState({
    id : "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
    // en este punto estamos seteando los input
  });

  const limpiarFormulario = () => {
    setDatosColaborador({
      id: "",
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  const handleInputs = (e) => {
    const inputsID = {
      inputNombre: "nombre",
      inputEmail: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTelefono: "telefono",
    };

    const prop = inputsID[e.target.id];
    if (prop) {
      setDatosColaborador({ ...datosColaborador, [prop]: e.target.value });
    }
  };

  // A) necesito que esten seteados los datos
  // b) necesito que este pendiente de los input
  // c) para despues hacer todas las variaciones que se necesitan
  // e) ID se debe agergar 1

  const validarDatos = (e) => {
    //es una expresion regular ya no se usa pero se debe saber
    e.preventDefault();
    console.log("validar datos");
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelef = /^[0-9]{9}$/;

    // el metodo trim es para eliminar los esoacios en blanco
    //el metodo .test solo se usa para testear las expresiones regulares

    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === ""
    ) {
      console.log("completar datos");
      setAlert({
        color: "warning",
        texto: "Debe completar los campos",
      });
    } else if (!regexEmail.test(datosColaborador.correo)) {
      console.log("error formato correo");
      setAlert({
        color: "warning",
        texto: "Email con formato incompatible",
      });
    } else if (!regexTelef.test(datosColaborador.telefono)) {
      console.log("error telefono");
      setAlert({
        color: "warning",
        texto:
          "Telefono con formato incompatible, asegurate de agregar nueve nùmeros",
      });
    } else {
      console.log("aqui");
      // agregar colaborador a la lista de colaboradores
      const ids = data.map((dat) => {
        return dat.id;
      });

      const newId = Math.max(...ids) + 1;
      console.log('nuevo id ' + newId)
      datosColaborador.id = newId;
      //setDatosColaborador({...datosColaborador, id: newId});
      console.log(datosColaborador);

      setData((data) => [...data, datosColaborador]);
      setDataFiltler((dataFilter)=> [...dataFilter,datosColaborador]);

      limpiarFormulario();

      setAlert({
        color: "success",
        texto: "Registro exitoso",
      });
    }

    // set data filter
  };

  return (
    <div>
      

      <form onSubmit={(e) => validarDatos(e)}>

      <h4>Agregar Colaborador</h4>
        <div className="ii">
          <input
            onChange={(e) => handleInputs(e)} // tambien onCHange se puede pasar de esta manera: onChange={handleInputs}
            value={datosColaborador.nombre}
            type="text"
            className=""
            id="inputNombre"
            placeholder="Nombre del Colaborador"
          />
        </div>

        <div className="ii">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.correo}
            type="email"
            className=""
            id="inputEmail"
            placeholder="Email del Colaborador"
          />
        </div>

        <div className="ii">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.edad}
            type="number"
            className=""
            id="inputEdad"
            placeholder="Edad del Colaborador"
          />
        </div>

        <div className="ii">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.cargo}
            type="text"
            className=""
            id="inputCargo"
            placeholder="Cargo del Colaborador"
          />
        </div>

        <div className="ii">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.telefono}
            type="text"
            className=""
            id="inputTelefono"
            placeholder="Telefono del Colaborador"
          />
        </div>

        <div className="ii ">
          <Button variant="dark" type="submit">
            Agregar Colaborador
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
