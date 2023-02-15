export const object2formdata = obj => {
  return structuredClone(obj)
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
  return `https://better-exabyte.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}