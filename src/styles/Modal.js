import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${props => (props.opened ? '1' : '0')};
  position: fixed;
  top: 0;
  transition: all 0.5s;
  width: 100%;
  z-index: ${props => (props.opened ? '100' : '-1')};
`;

export const ModalWrapper = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  padding: 32px 64px;
  position: relative;
  max-width: 90%;
`;
