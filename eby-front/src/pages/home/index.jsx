import React, { useState, useEffect } from 'react';

import {
  Container, ContentTitle, Title, BtnSucces, BtnAction, BtnAntProxPrim, Table,
  BtnAntProx, TitleUser,
} from '../../styles/customAdm';

const Home = () => {
  const [data, setData] = useState([]);

  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  const month = dateCurrent.getMonth() + 1;
  const day = dateCurrent.getDay();
  console.table(`ano /${year} do mes /${month} dia/${day}`);

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
    const notas = [
      {
        id: 1,
        notas: 'escovar os dentes',
        date: '07/11/2021',
      },
      {
        id: 2,
        notas: 'estdar os conteudos',
        date: '07/11/2021',
      },
      {
        id: 3,
        notas: 'escovar os cabelos',
        date: '07/11/2021',
      },
      {
        id: 4,
        notas: 'escovar os cabelos do cachorro',
        date: '07/11/2021',
      },
    ];
    setData(notas);
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
          <BtnSucces>Cadastrar</BtnSucces>
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
          {data.map((nota) => (
            <tr key={nota.id}>
              <td>{nota.id}</td>
              <td>{nota.notas}</td>
              <td>{nota.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
