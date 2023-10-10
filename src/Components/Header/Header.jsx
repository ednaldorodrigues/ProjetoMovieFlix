import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { HeaderStyled, Nav, Input, Button, Form } from './style.jsx';

const Header = () => {
  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/search?q=${value}`);
    setValue('');
  }

  return (
    <HeaderStyled>
      <Nav>
        <Link to="/">movieflix</Link>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="text"
            value={value}
            placeholder='Pesquisar'
            maxLength={'25'}
            onChange={({ target }) => setValue(target.value)}
          />
          <Button onClick={handleClick}><BiSearch/></Button>
        </Form>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
