import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: 'le8is5n0',
  dataset: 'production',
}

export const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  token: process.env.SANITY_PUBLIC_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
