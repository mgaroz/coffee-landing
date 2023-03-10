import PocketBase from 'pocketbase'
import { object2formdata } from '$lib/utils'
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

export const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL)
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = object2formdata(event.locals.pb.authStore.model)
  } else {
    event.locals.user = undefined
  }

  const response = await resolve(event)
  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

  return response
}
