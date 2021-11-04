import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../functions/apiFunction'

const Editar = () => {

  const [taskAdd, setTaskAdd ] = useState({
    task:'',
    status:'',
  })

  const valueTask = (e) => {
    setTaskAdd({
      ...taskAdd, [e.target.name]:e.target.value
    })
  }

  const cadastrar = async (e) => {
    e.preventDefault()

    await api.put("http://localhost:65335/task/",taskAdd)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
  }

  return(
  <div>
    <h1>Editar</h1>
    <Link to="/">
      <button type="submit">Home</button>
    </Link>
    <form onSubmit={Editar}>
      <label>task
      <input type="text" name="task" placeholder="nota" onChange={valueTask}/>
      </label>
      <label>
        <select name="select">
          <option value="Pedente">Pedente</option>
          <option value="Andamento" >Andamento</option>
          <option value="Concluido">Concluido</option>
        </select>
      </label>status
      <button type="submit">Editar</button>
    </form>
  </div>
  );
}

export default Editar;
