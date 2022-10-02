import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const ModalWindow = styled.div`
  position: relative;
  background-color: #c9edf5;
  border-radius: 20px;
  width: 500px;
  height: 300px;
`;
