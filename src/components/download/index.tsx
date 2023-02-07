import { IDownload } from 'interfaces'

import {
  Box,
  Heading,
  Link
} from '@chakra-ui/react'

export const Download: React.FC<IDownload> = ({ title, link }) => (
  <Box w="100%" textAlign="center">
    <Heading
      as="h2"
      mb={ 3 }
      size="md"
    >{ title }</Heading>
    <Link
      href={ link }
      target="_blank"
      rel="noreferrer"
    >Download MP3</Link>
  </Box>
)
