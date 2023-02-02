import { IData } from 'interfaces'

export const convert = async (youtubeId: string): Promise<IData | Error> => {
  try {
    const RESPONSE = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${youtubeId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd113bf2857mshf1bf82bbecd02d8p1e9d1djsn2f5b44680886',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    })
    const DATA: IData = await RESPONSE.json()

    return DATA
  } catch (error) {
    return new Error(error as string)
  }
}
