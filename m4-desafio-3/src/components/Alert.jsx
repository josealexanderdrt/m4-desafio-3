import Badge from 'react-bootstrap/Badge'

const Alert = ({texto, color}) => {
  return (
      <>

      <div className='d-flex justify-content-center align-items-center'>
      <Badge bg={color}>
        {texto}
      </Badge>

      </div>
      
      </>
    )
  
}

export default Alert