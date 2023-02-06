import {
  FormEvent,
  PropsWithChildren,
  useState
} from 'react'

import { DataContext } from 'contexts'

import { getIdYoutube, getValueForm } from 'helpers'

import { convert } from 'apis'

import { REGEX_YOUTUBE } from 'utils'

import { IData } from 'interfaces'

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ data, setData ] = useState<IData | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const { url } = getValueForm(e)

    if (!REGEX_YOUTUBE.test(url)) {
      setData({ status: 'fail' })

      return
    }

    setData({ status: 'processing' })

    const YOUTUBE_ID = getIdYoutube(url) as string

    try {
      const DATA = await convert(YOUTUBE_ID) as unknown as IData

      console.log({ DATA })

      setData(DATA)
    } catch (error) {
      console.error('Error: ', error)

      setData({ status: 'fail' })
    }
  }

  const VALUE = {
    data,
    handleSubmit
  }

  return (
    <DataContext.Provider value={ VALUE }>
      { children }
    </DataContext.Provider>
  )
}
