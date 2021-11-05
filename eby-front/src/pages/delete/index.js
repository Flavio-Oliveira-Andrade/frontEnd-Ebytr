import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import api from '../../functions/apiFunction'

const Destroy = (props) => {

  const [idTask ] = useState(props.match.params.id)
  console.log(idTask)

  useEffect(() => {
   console.log("loping")
    const destroy = async () =>{
    await api.delete("http://localhost:65335/task/"+idTask)
      .then((response) => {
        console.log(response.data)
      }).catch((err) => {
        console.log(err)
    })
    }
    destroy()

  }, [idTask])

  return(
  <div>
    <h1>Delete</h1>
    <h3>deletado com sucesso</h3>

    <h4>Click para voltar</h4>
    <Link to="/">
      <button type="submit">Home</button>
    </Link>

  </div>
  );
}

export default Destroy;
