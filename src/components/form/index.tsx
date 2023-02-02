import {
  FormEvent,
  useRef,
  useState
} from 'react'

import { convert } from 'apis'

import { getIdYoutube } from 'helpers'

import { IData, TLoading } from 'interfaces'

import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Container,
  Heading
} from '@chakra-ui/react'

export const Form: React.FC = () => {
  const inputRef = useRef(null)
  const [ loading, setLoading ] = useState<TLoading | null>(null)
  const [ data, setData ] = useState<IData | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setLoading('processing')

    const value = (inputRef.current as unknown as HTMLInputElement).value

    const YOUTUBE_ID = getIdYoutube(value) as string

    try {
      const DATA = await convert(YOUTUBE_ID) as unknown as IData

      setLoading('ok')
      setData(DATA)
    } catch (error) {
      console.error('Error: ', error)

      setLoading('fail')
    }
  }

  return (
    <>
      { !loading && (
        <form onSubmit={ handleSubmit } method="GET">
          <FormControl mb={ 2 }>
            <FormLabel color="white">Add the URL of Youtube for convert in an MP3</FormLabel>
            <Input ref={ inputRef } type="text" />
          </FormControl>
          <Button
            type="submit"
            w="100%"
            colorScheme="purple"
          >Convert</Button>
        </form>
      ) }

      { loading === 'processing' && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="white"
          color="purple.500"
          size="xl"
        />
      ) }

      { loading === 'fail' && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error in convert</AlertTitle>
          <AlertDescription>{ data?.msg }</AlertDescription>
        </Alert>
      ) }

      { loading === 'ok' && (
        <Container>
          <Heading>{ data?.title }</Heading>
          <a target="_blank" rel="noreferrer" href={ data?.link } className="download_btn">Download MP3</a>
        </Container>
      ) }
    </>
  )
}
