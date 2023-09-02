import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { baseColaboradores } from '../baseColaboradores';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario'
import Alert from './components/Alert'




function App() {
  const [data, setData] = useState (baseColaboradores); // esto son los colaboradores originales
  const [dataFilter, setDataFiltler] = useState (data); // esto son los colaboradores que vienen filtrados 


  const [alert, setAlert] = useState ({
    color: '',
    texto: '',
  
  });

  const addColaborador = (colaborador) =>{
    const ids = data.map(dat => {return dat.id});
    colaborador.id = Math.max(...ids)+1;

    setData(data => [...data, colaborador])
    setDataFiltler(data);
  }
  



  return (
    <>
      <p>Hola mundo </p>
      <Buscador 
      data={data}
      // se necesita la data original, es para que el buscador este pendiente
      setDataFiltler={setDataFiltler}
      // pero tambien va a necesitar la logica de dataFiltler, es lo que le vamos a pasar cuando escribamos dentro del input 
      />
      

      <Listado 
      dataFilter={dataFilter}
      // Al listado tambien se le tiene que pasar el datafilter porque el compoenente tambien tiene que estar atento de lo que se va a filtrar,
      />
      
      <Formulario 
      setAlert={setAlert}
      addColaborador={addColaborador}
      data={data}
      setData={setData}
      dataFilter={dataFilter}
      setDataFiltler={setDataFiltler}
      />
      <Alert color={alert.color} texto={alert.texto} />
    

    </>
  );
}

export default App
