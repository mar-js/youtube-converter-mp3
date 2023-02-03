import {
  FormEvent,
  PropsWithChildren,
  useState
} from 'react'

import { DataContext } from 'contexts'

import { getIdYoutube } from 'helpers'

import { convert } from 'apis'

import {
  IData,
  IUrl,
  TLoading
} from 'interfaces'

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ loading, setLoading ] = useState<TLoading | null>(null)
  const [ data, setData ] = useState<IData | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const { url } = DATA as unknown as IUrl
    const REG = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm

    if (!REG.test(url)) {
      setLoading('fail')

      return
    }

    setLoading('processing')

    const YOUTUBE_ID = getIdYoutube(url) as string

    try {
      const DATA = await convert(YOUTUBE_ID) as unknown as IData

      setLoading('ok')
      setData(DATA)
    } catch (error) {
      console.error('Error: ', error)

      setLoading('fail')
    }
  }

  const VALUE = {
    loading,
    data,
    handleSubmit
  }

  return (
    <DataContext.Provider value={ VALUE }>
      { children }
    </DataContext.Provider>
  )
}
