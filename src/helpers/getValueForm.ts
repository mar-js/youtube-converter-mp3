import { FormEvent } from 'react'

import { IUrl } from 'interfaces'

export const getValueForm = (e: FormEvent) => {
  const TARGET = e.target as HTMLFormElement
  const DATA = Object.fromEntries(new FormData(TARGET))
  const { url } = DATA as unknown as IUrl

  return { url }
}
