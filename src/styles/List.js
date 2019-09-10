import styled from 'styled-components';

export default styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48px;
  list-style: none;
  padding: 32px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px 48px;
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 16px 32px;
  }
`;

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
