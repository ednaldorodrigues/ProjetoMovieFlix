import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background: #032541;
    display: flex;
    align-items: center;
    max-width: 100%;
`;

export const Form = styled.form`
    position: relative;
`;

export const Nav = styled.nav`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
`;

export const Input = styled.input`
    padding: .8rem 1rem;
    width: 300px;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #eee;
    font-size: 1rem;
    transition: .4s;
    &:hover,
    &:focus {
        outline: none;
        background: #fff;
        border-color: #fff;
        box-shadow: 0 0 0 2px #01547D;
    }
`;

export const Button = styled.button`
    border: none;
    background: none;
    font-size: 2rem;
    position: absolute;
    right: 0;
    top: 5px;
    cursor: pointer;
    color: #032541;
`;