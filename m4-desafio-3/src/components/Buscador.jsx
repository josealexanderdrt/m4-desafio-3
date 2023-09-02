const Buscador = ({data, setDataFiltler}) => {

const inputHandle = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();
     // con e.target.value estamos capturando los datos  toLowerCase() es para convertir todo en minuscula 
    
    const resultado = data.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(buscarPalabra) || 
    colaborador.correo.toLowerCase().includes(buscarPalabra) ||
    colaborador.edad.toLowerCase().includes(buscarPalabra) ||
    colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
    colaborador.telefono.toLowerCase().includes(buscarPalabra)
    );

        // en este punto se esta filtrando la informacion
    //.includes es util cuando se deve verificar si un valor especifico esta presente en una cadena de texto  o en un array, se usa para tomar desiciones basadas en la presencia o ausencia de un valor en los datos, lo que hace es devolver un true o false

    setDataFiltler(resultado);

    // La constante resultado esta guardando hasta el momento toda la informacion
    //entonces  data filter, recibira resultado ( que es la informacion filtrada )

//

};


  return (
    <div>Buscador
        <input
         type="text" 
         name="buscador"
         id="buscador"
         placeholder="Busca un Colaborador"
         className=""
         onChange={inputHandle}

         // se necesita un evento para un cambio de estado, en este caso el Onchange, en este caso recibira TODA LA FUNCION 
         />

    </div>
  )
}

export default Buscador