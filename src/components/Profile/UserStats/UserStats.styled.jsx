import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  height: 100px;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100px;
  background-color: rgb(236, 233, 233);

  outline: 1px solid ${props => props.theme.colors.border};
`;

export const Label = styled.span`
    font-size: 18px;
`
export const Quantity = styled.span`
    font-size: 18px;
`
