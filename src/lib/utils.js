const url = import.meta.env.PUBLIC_POCKETBASE_URL

export const object2formdata = obj => {
  return structuredClone(obj)
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
  return `${url}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}