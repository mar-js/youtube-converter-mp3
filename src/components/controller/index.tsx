import { useData } from 'contexts'

import {
  Alert,
  Download,
  Loader
} from 'components'

export const Controller: React.FC = () => {
  const { loading, data } = useData()

  return (
    <>
      { loading === 'processing' && <Loader /> }

      { loading === 'fail' && <Alert msg={ data?.msg as string } /> }

      { loading === 'ok' && <Download title={ data?.title as string } link={ data?.link as string } /> }
    </>
  )
}
