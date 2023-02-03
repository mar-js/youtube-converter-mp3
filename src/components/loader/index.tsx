import { Spinner } from '@chakra-ui/react'

export const Loader: React.FC = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="white"
    color="purple.500"
    size="xl"
  />
)
