import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../functions/apiFunction'

const Cadastar = () => {

  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  const month = dateCurrent.getMonth() + 1;
  const day = dateCurrent.getDay();
  const fulldate =`${day}/${month}/${year}`;

  const [taskAdd, setTaskAdd ] = useState({
    task:'',
    date:fulldate
  })

  const valueTask = (e) => {
    setTaskAdd({
      ...taskAdd, [e.target.name]:e.target.value
    })
  }

  const cadastrar = async (e) => {
    e.preventDefault()

    await api.post("http://localhost:65335/task/",taskAdd)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
  }

  return(
  <div>
    <form onSubmit={cadastrar}>
      <label>task: </label>
      <input type="text" name="task" placeholder="nota" onChange={valueTask}/>
      <button type="submit">cadastrar</button>
    </form>
    <Link to="/">
      <button type="submit">Home</button>
    </Link>
  </div>
  );
}

export default Cadastar;
