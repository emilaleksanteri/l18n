import type { LayoutServerLoad } from "./$types"
import data from "$lib/translations.json"

export const load: LayoutServerLoad = async (event) => {
  const region: string = event.request.headers.get("cf-ipcountry") ?? "FI"
  const userRegion = event.cookies.get("language")
  const langOptions = Object.keys(data)

  let chosenLanguage 
  if (!userRegion) {
    event.cookies.set("language", region, { path: "/" })
    chosenLanguage = region
  } else {
    chosenLanguage = userRegion
  }

  return {
    lang: chosenLanguage,
    languageOptions: langOptions
  }
}
