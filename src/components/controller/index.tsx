import { useData } from 'contexts'

import {
  Alert,
  Download,
  Loader
} from 'components'

export const Controller: React.FC = () => {
  const { data } = useData()

  return (
    <>
      { data?.status === 'processing' && <Loader /> }

      { data?.status === 'fail' && <Alert msg={ data?.msg as string } /> }

      { data?.status === 'ok' && <Download title={ data?.title as string } link={ data?.link as string } /> }
    </>
  )
}
