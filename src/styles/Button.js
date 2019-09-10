import styled from 'styled-components';

export const ButtonLink = styled.button`
  background: transparent;
  border: 0;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  transition: all 250ms;

  &:hover {
    color: #e68122;
    opacity: 0.8;
  }

  &:active {
    color: #e68122;
    opacity: 1;
  }
`;

export const ButtonAdd = styled.button`
  background: #f598a4;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  transition: all 250ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #c57a83;
  }
`;
