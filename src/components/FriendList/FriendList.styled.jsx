import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  width: 300px;
  height: 100px;
  padding-left: 30px;
  overflow: hidden;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 10px;

  &:hover, &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  }
`;

export const Avatar = styled.img`
 width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-size: 34px;
`;



// Status -------------------------------------- Приклад через ТЕМУ та через змінну у корені

const getColorStatus = ({isonline, theme})=>{
if (isonline) {
      return theme.colors.online;
    } else {
      return 'var(--status-offline);';
    }
}

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${getColorStatus};
`;

