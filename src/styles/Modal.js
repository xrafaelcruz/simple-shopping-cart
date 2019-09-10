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
  background: #fff;
  border-radius: 4px;
  padding: 32px;
  position: relative;
  max-width: 90%;
`;

export const ButtonClose = styled.button`
  border: 0;
  cursor: pointer;
  opacity: 0.8;
  padding: 0;
  position: absolute;
  right: 8px;
  top: 8px;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }

  i {
    color: #b55353;
    font-size: 24px;
  }
`;
