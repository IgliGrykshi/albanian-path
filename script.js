import { createClient } from "https://cdn.skypack.dev/@sanity/client"

export const sanity = createClient({
  projectId: "pmckc756",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true
})

export async function getTours() {
  return sanity.fetch(`*[_type == "tour"]`)
}
// sanity.fetch('*[_type == "tour"]')
//   .then(console.log)
//   .catch(console.error)