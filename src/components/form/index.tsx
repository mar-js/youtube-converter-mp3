import { useData } from 'contexts'

import {
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

export const Form: React.FC = () => {
  const { handleSubmit } = useData()

  return (
    <form onSubmit={ handleSubmit } method="GET">
      <FormControl mb={ 2 }>
        <FormLabel color="white">Add the URL of Youtube for convert in an MP3</FormLabel>
        <Input type="text" name="url" />
      </FormControl>
      <Button
        type="submit"
        w="100%"
        colorScheme="purple"
      >Convert</Button>
    </form>
  )
}
