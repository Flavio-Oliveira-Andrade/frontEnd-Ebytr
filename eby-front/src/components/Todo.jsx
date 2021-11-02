import React from 'react'

const ListTodo = () =>{
  // const [task, setTask] = useState([])

  return (
    <div>
      <form className="form">
        <input type="text" className="form-control" placeholder="white your task"/>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default ListTodo