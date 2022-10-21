// import { Children } from "react";
import { Container } from './App.styled';
import { Box } from './Box';

export const App = ({ children }) => {
  return (
    <Box bg="mainBg" color="text">
      <Container>
        React homework template
        {children}
      </Container>
    </Box>
  );
};
