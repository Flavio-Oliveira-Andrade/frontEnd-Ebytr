import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {
  Container, ContentTitle, Title, BtnSucces, BtnAction, BtnAntProxPrim, Table,
  BtnAntProx, TitleUser,BtnActtionEdit, BtnActtionDel,
} from '../../styles/customAdm';

import api from '../../functions/apiFunction'

const Cadastrar = () => {

  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  const month = dateCurrent.getMonth() + 1;
  let monthh = month < 10 ? '0' + month : month;
  const day = dateCurrent.getDay();
  let dayy = day < 10 ? '0' + day : day;
  const fulldate =`${dayy}/${monthh}/${year}`;

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
  <Container>
    <ContentTitle>
        <Title>Cadastrar</Title>
        <TitleUser>Notas do Flavio</TitleUser>
        <BtnAction>
          <Link to="/">
            <BtnSucces>Home </BtnSucces>
          </Link>
        </BtnAction>
      </ContentTitle>
    <form onSubmit={cadastrar}>
      <label>task: </label>
      <input type="text" name="task" placeholder="nota" onChange={valueTask}/>
      <button type="submit">cadastrar</button>
    </form>
  </Container>
  );
}

export default Cadastrar;
