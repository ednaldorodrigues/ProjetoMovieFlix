import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background: #032541;
    display: flex;
    align-items: center;
    max-width: 100%;
`;

export const Img = styled.img`
    display: block;
    margin: 0 auto;
`;

export const Form = styled.form`
    position: relative;
`;

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 1.25rem auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: normal;
        gap: 1rem;
        margin: 1rem auto;
    }
`;

export const Input = styled.input`
    padding: .7rem;
    width: 300px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.temerro ? '#ec1c1c' : '#eee'};
    background: #eee;
    font-size: 1rem;
    transition: .4s;
    &:hover,
    &:focus {
        outline: none;
        background: #fff;
        border-color: #fff;
        box-shadow: 0 0 0 2px ${(props) => props.temerro ? '#ec1c1c' : '#01547D'};
    }

    @media (max-width: 768px) {
        width: 95%;
        
    }

    @media (max-width: 400px) {
        
    }
`;

export const Erro = styled.p`
    color: #ec1c1c;
    margin-top: 2px;
    position: absolute;
    font-size: .9rem;
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