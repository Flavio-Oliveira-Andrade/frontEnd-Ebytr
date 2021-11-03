import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  width: 960px;
  max-width: 960px;
`;

export const ContentTitle = styled.section`
  display: flex;
  justify-content: space-between
`;

export const BtnAction = styled.section`
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-family: sans-serif;;
  margin: 10px, 15px;
  color: #1d1e1e
`;

export const TitleUser = styled.h1`
  font-size: 16px;
  font-family: sans-serif;;
  margin: 10px, 15px;
  color: #007281;
  border-top: 3px solid #045874
`;

export const BtnAntProx = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #c1c1c1;
  padding 10px 17px
`;

export const BtnSucces = styled.button`
  background-color: #fff;
  color:#198754;
  padding: 15px 10px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
    :hover{
      background-color: #198754;
      color: #fff
    }
`;

export const BtnAntProxPrim = styled.button`
  background-color: #fff;
  color:#0d6efd;
  padding: 10px 17px;
  border: 1px solid #0d6efd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
    :hover{
      background-color: #0d6efd;
      color: #fff
    }
`;

export const Table = styled.table`
  margin-top: 15px;
  width: 100%;
  th{
    background-color: #007281;
    color: #f1f1f1;
    padding: 10px;
  }
  td{
    background-color: #f6f6f6;
    color: #3e3e3e;
    padding: 8px;
  }
`;
