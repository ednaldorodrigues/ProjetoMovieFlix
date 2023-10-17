import styled, { keyframes } from 'styled-components';

export const ContainerLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const loading = keyframes`
    to {
    transform: rotate(360deg);
  }
`;

export const StyleLoading = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #ccc;
    border-right-color: transparent;
    animation: ${loading} 1s infinite;
`;