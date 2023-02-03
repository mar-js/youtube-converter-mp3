import { IAlert } from 'interfaces'

import {
  Alert as AlertCHUI,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Button,
  Link
} from '@chakra-ui/react'

export const Alert: React.FC<IAlert> = ({ msg }) => (
  <AlertCHUI status="error">
    <AlertIcon />
    <AlertTitle>Error in convert</AlertTitle>
    { msg && <AlertDescription>Message error: { msg }</AlertDescription> }
    <Button colorScheme="red">
      <Link href="/">
        reload page
      </Link>
    </Button>
  </AlertCHUI>
)
