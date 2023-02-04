import { useData } from 'contexts'

import { Container } from '@chakra-ui/react'
import {
  Controller,
  Form,
  Title
} from 'components'

export const App: React.FC = () => {
  const { loading } = useData()

  return (
    <Container
      h="100vh"
      maxW="100%"
      bgGradient="linear(to-b, orange.100, purple.100, purple.200, purple.300, purple.400)"
    >
      <Container
        h="100%"
        maxW="container.md"
        py={ 5 }
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Title />
        { loading ? <Controller /> : <Form /> }
      </Container>
    </Container>
  )
}
