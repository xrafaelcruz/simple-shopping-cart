import styled from 'styled-components';

export default styled.header`
  background: #fff;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  margin: auto;
  padding: 8px 32px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 33%;
  height: 100%;
  justify-content: ${props => (props.x ? props.x : 'flex-start')};
  max-width: 33%;

  > button,
  .logo {
    height: 100%;
  }
`;
