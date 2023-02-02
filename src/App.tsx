import { Container } from '@chakra-ui/react'
import { Form, Title } from 'components'

export const App: React.FC = () => (
  <Container
    h="100vh"
    maxW="100%"
    bgGradient="linear(to-b, orange.100, purple.100, purple.200, purple.300, purple.400)"
  >
    <Container
      h="100%"
      maxW="container.sm"
      py={ 5 }
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Title />
      <Form />
    </Container>
  </Container>
)
