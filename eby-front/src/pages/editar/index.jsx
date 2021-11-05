import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import api from '../../functions/apiFunction'

const Editar = (props) => {

  const [idTask ] = useState(props.match.params.id)

  const [task, setTask ] = useState("")
  const [date, setDate ] = useState("")
  const [status, setStatus ] = useState("")


  console.log("eeeeeee",task, date, status)


  useEffect(() => {
   console.log("loping")
    const getBayId = async () =>{
    await api.get("http://localhost:65335/task/"+idTask)
      .then((response) => {
        setTask(response.data.task)
        setDate(response.data.date)
        setStatus(response.data.status)
      }).catch((err) => {
        console.log(err)
    })
    }
    getBayId()

  }, [idTask])

  const editarcadastro = async (e) => {
    e.preventDefault()
    await api.put("http://localhost:65335/task/"+idTask,{task,date, status})
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
      <form onSubmit={editarcadastro}>
        <label>Task</label>
        <input type="text" name="task"value={task} onChange={(e)=>setTask(e.target.value)}/>
        <label>Date</label>
        <input type="text" name="date"value={date} onChange={(e)=>setDate(e.target.value)}/>
        <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
          <option value="pedente">Pedente</option>
          <option value="andamento" >Andamento</option>
          <option value="concluido">Concluido</option>
        </select>
        <button type="submit">Editar</button>
      </form>

  </div>
  );
}

export default Editar;
