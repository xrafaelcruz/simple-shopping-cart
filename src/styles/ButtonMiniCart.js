import styled from 'styled-components';

export default styled.div`
  position: relative;
`;

export const Circle = styled.div`
  align-items: center;
  background: #f598a4;
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 12px;
  justify-content: center;
  height: 20px;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
`;

export const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  justify-content: center;
  position: relative;
`;
