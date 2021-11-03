import React from 'react';
import { Link } from 'react-router-dom';

const Cadastar = () => (
  <>
    <form>
      <input type="text" placeholder="nota" />
      <button type="submit">cadastrar</button>
    </form>
    <Link to="/">
      <button type="submit">Home</button>
    </Link>
  </>
);

export default Cadastar;
