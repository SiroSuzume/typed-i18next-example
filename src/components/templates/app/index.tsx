import { Container } from '@chakra-ui/react';

export const AppLayout: React.FC = ({ children }) => (
  <>
    <Container as="main" maxW="container.xl" pt="2rem">
      {children}
    </Container>
  </>
);
