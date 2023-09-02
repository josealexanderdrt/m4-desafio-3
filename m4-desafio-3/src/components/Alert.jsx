import Badge from 'react-bootstrap/Badge'

const Alert = ({texto, color}) => {
  return (
      <>

      <div>
      <Badge bg={color}>
        {texto}
      </Badge>

      </div>
      
      </>
    )
  
}

export default Alert