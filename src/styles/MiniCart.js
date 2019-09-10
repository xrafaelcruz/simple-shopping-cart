import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 0 0 8px;
  position: absolute;
  right: 0;
  top: 25px;
  width: 200px;
  z-index: 10;
`;

export const List = styled.ul`
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 201px;
  list-style: none;
  overflow-y: auto;
  margin: 0 0 8px;
  width: 100%;
`;

export const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  height: 50px;
  padding: 8px 16px;

  &:last-of-type {
    border-bottom: 0;
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
  width: 40px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const Detail = styled.span`
  font-size: 14px;
  margin: ${props => (props.margin ? props.margin : 0)};
`;
