import styled from 'styled-components';

export default styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0 auto 32px;
  width: 100%;
  z-index: 10;

  @media (max-width: 540px) {
    align-items: center;
  }
`;

export const List = styled.ul`
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  list-style: none;
  margin: 0 0 16px;
  width: 100%;
`;

export const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  height: 67px;
  padding: 8px 32px;

  @media (max-width: 540px) {
    flex-direction: column;
    height: 270px;
    padding: 32px;
    justify-content: center;
  }

  &:last-of-type {
    border-bottom: 0;

    @media (max-width: 540px) {
      height: 50px;
    }
  }

  img {
    max-height: 100%;
  }
`;

export const WrapperImg = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 16px 0 0;
  width: 40px;

  @media (max-width: 540px) {
    height: 100px;
    margin: auto;
    width: 100%;
  }
`;

export const Detail = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 40px 0 0;

  @media (max-width: 540px) {
    margin: 16px auto;
  }

  > * {
    margin: 5px;
  }
`;

export const Block = styled.div`
  align-items: center;
  display: flex;
  height: 100%;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
