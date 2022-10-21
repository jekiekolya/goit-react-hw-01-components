import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: 400px;

  overflow: hidden;

  font-size: ${p => p.theme.fontsSizes.s}px;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  height: 300px;

  padding-top: 50px;

  background-color: #ffffff;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const Tag = styled.p`
  color: #aaadad;
`;

export const Location = styled.p`
  font-size: 18px;
  color: #aaadad;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;

  margin-bottom: 30px;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
`;