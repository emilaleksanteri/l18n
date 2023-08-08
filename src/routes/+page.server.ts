import type { PageServerLoad, Actions } from "./$types"
import data from "$lib/translations.json"

export const load: PageServerLoad = async function load({ parent }) {
  const { lang } = await parent()
  const pageContent = data[lang as "GB" | "FI"]
  return { content: pageContent }
}

export const actions: Actions = {
  setNewLang: async ({ cookies, request }) => {
    const data = await request.formData()
    const newLang = data.get("lang")
    if (typeof newLang !== "string") {
      return
    }

    cookies.set("language", newLang, { path: "/" })
    return { success: true }
  }
}
