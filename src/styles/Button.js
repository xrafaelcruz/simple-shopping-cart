import styled, { css } from 'styled-components';

const common = css`
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 250ms;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled.button`
  ${common}

  background: transparent;
  color: #333;
  padding: 0;

  &:hover {
    color: #f598a4;
    opacity: 0.8;
  }

  &:active {
    color: #f598a4;
    opacity: 1;
  }
`;

export const ButtonAdd = styled.button`
  ${common}

  background: #f598a4;
  color: #fff;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #c57a83;
  }
`;

export const ButtonCheckout = styled.button`
  ${common}

  background: #085caa;
  color: #fff;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #063f75;
  }
`;

export const ButtonRemove = styled.button`
  ${common}

  align-items: center;
  background: #ce1126;
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #960b1a;
  }
`;

export const ButtonSum = styled.button`
  ${common}

  align-items: center;
  background: #57bd17;
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #3f8811;
  }
`;
