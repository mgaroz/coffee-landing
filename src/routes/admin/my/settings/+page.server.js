import { redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  } else {
    throw redirect(303, '/admin/my/settings/profile')
  }
}