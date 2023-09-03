import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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


  return (
    <>

  <Container>
    <Row>
    <Col>
      
      <h3>Lista de Colaboradores</h3>
      <Buscador 
      data={data}
      // se necesita la data original, es para que el buscador este pendiente
      setDataFiltler={setDataFiltler}
      // pero tambien va a necesitar la logica de dataFiltler, es lo que le vamos a pasar cuando escribamos dentro del input 
      />
    
    </Col>
    </Row>
    
  
    <Row>
    <Col>
      <Listado 
      data={data}
      setData={setData}
      dataFilter={dataFilter}
      setDataFiltler={setDataFiltler}
      // Al listado tambien se le tiene que pasar el datafilter porque el compoenente tambien tiene que estar atento de lo que se va a filtrar,
      />

    </Col>
      

    <Col> 
      <Formulario 
      setAlert={setAlert}
      data={data}
      setData={setData}
      dataFilter={dataFilter}
      setDataFiltler={setDataFiltler}
      />
      <Alert color={alert.color} texto={alert.texto} />
    
      </Col>
    
    
      </Row>

      </Container>
    </>
  );
}

export default App
