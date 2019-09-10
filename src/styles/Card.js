import styled, { css } from 'styled-components';

const centerColumn = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default styled.div`
  ${centerColumn}
`;

export const CardBody = styled.div`
  ${centerColumn}
  cursor: pointer;
  height: 266px;
  padding: 48px 16px;
  position: relative;
  width: 212px;

  &:hover {
    &:before {
      transform: scale3d(0.93, 0.93, 1) rotate(1.25deg);
    }
  }

  &:before {
    background: #f6f7fb;
    border: 0;
    border-radius: 4px;
    content: ' ';
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    width: 100%;
    z-index: 1;
  }

  > img {
    max-height: 100%;
    max-width: 100%;
    position: relative;
    z-index: 2;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  width: 100%;
`;

export const CardButtons = styled.div``;

export const CardName = styled.strong`
  padding: 8px 0 0;
`;

export const CardDescription = styled.p`
  padding: 0 0 8px;
`;

export const CardPrice = styled.span`
  padding: 0 0 16px;
`;
