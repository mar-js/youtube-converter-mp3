export const getIdYoutube = (url: string) => {
  const REG_EXP = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const MATCH = url.match(REG_EXP)

  return (MATCH && MATCH[7].length === 11) && MATCH[7]
}
