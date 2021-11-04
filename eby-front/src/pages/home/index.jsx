import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../functions/apiFunction'

import {
  Container, ContentTitle, Title, BtnSucces, BtnAction, BtnAntProxPrim, Table,
  BtnAntProx, TitleUser,
} from '../../styles/customAdm';

const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  const month = dateCurrent.getMonth() + 1;
  const day = dateCurrent.getDay();
  console.log(`ano /${year} do mes /${month} dia/${day}`);

  const [dateView, setDataView] = useState({
    year,
    month,
  });

  const anterior = async () => {
    if (dateView.month === 1) {
      setDataView({
        year: dateView.year - 1,
        month: 12,
      });
    } else {
      setDataView({
        year: dateView.year,
        month: dateView.month - 1,
      });
    }
  };

  const Proximo = async () => {
    if (dateView.month === 12) {
      setDataView({
        year: dateView.year + 1,
        month: 1,
      });
    } else {
      setDataView({
        year: dateView.year,
        month: dateView.month + 1,
      });
    }
  };
  const listarNotas = async () => {

    await api.get('http://localhost:65335/task/')
      .then((response) => {
        console.log(response)
        setData(response.data);
      }).catch((err) => {
        console.log(err)
      })



  };

  useEffect(() => {
    listarNotas();
  }, []);

  return (
    <Container>
      <ContentTitle>
        <Title>Listar Notas</Title>
        <TitleUser>Notas do Flavio</TitleUser>
        <BtnAction>
          <Link to="/cadastar">
            <BtnSucces>Cadastrar</BtnSucces>
          </Link>
        </BtnAction>
      </ContentTitle>
      <BtnAntProx>
        <BtnAntProxPrim onClick={() => anterior()}>Anterior</BtnAntProxPrim>
        <span>
          {dateView.year}
          {' '}
          /
          {' '}
          {dateView.month < 10 ? `0${dateView.month}` : dateView.month }
        </span>
        <BtnAntProxPrim onClick={() => Proximo()}>Proximo</BtnAntProxPrim>
      </BtnAntProx>

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Notas</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          { !data  ? <p>Loading...</p> : data.map((nota, index) => (
            <tr key={index}>
              <td>{nota._id}</td>
              <td>{nota.task}</td>
              <td>{nota.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
