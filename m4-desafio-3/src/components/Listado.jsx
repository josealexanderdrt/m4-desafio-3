import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

const Listado = ({data,setData,dataFilter, setDataFiltler}) => {

  const eliminar = (id)=>{
   console.log("eliminar: "+id)
   const newData =data.filter(col => col.id !== id); 
    setData(newData)
    setDataFiltler(newData)

  }
  
  const colaboradores = dataFilter.map((colaborador) =>(
    <tr key={colaborador.id}>
        <td>{colaborador.id}</td>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
        <td> <Button variant="dark" onClick={() =>eliminar(colaborador.id)}>
            Eliminar
          </Button></td>
    </tr>
  ));
  
  
    return (
    <div>

    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{colaboradores}
      </tbody>
    </Table>
    </div>
  )
}

export default Listado