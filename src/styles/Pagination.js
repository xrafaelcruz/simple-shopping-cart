import styled from 'styled-components';

export default styled.div`
  margin: 32px auto;
`;

export const PagingButton = styled.button`
  color: ${props => (props.active ? '#f598a4' : '#000')};
  cursor: pointer;
  background: #fff;
  border: 1px solid #f6f7fb;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px;

  &:hover {
    background: #f6f7fb;
  }
`;
