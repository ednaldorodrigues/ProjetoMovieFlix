import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { HeaderStyled, Nav, Input, Button, Form, Erro, Img } from './style.jsx';
import logo from '../../img/logo.png';

const Header = () => {
  const [value, setValue] = React.useState([]);
  const [erro, setErro] = React.useState(null);

  const navigate = useNavigate();

  function handleClick() {
    if(value.length === 0) {
      return setErro('Por favor, preencha um valor !');
    }
    navigate(`/search?q=${value}`);
    setErro(null);
    setValue('');
  }

  return (
    <HeaderStyled>
      <Nav>
        <Link to="/"> <Img src={logo} alt="logo.png" /> </Link>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="text"
            value={value}
            placeholder='Buscar...'
            maxLength={'25'}
            onChange={({ target }) => {
              setValue(target.value);
              if(value) setErro(null);
            }}
            temerro={erro !== null}
          />
          <Erro>{erro}</Erro>
          <Button onClick={handleClick}><BiSearch/></Button>
        </Form>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
