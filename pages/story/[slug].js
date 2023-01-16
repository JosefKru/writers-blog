import Head from 'next/head'
import React from 'react'
import Content from '../../components/Content'
import Article from './../../components/Article'
import { format } from 'date-fns'
import { client } from '../../lib/client'

const Story = ({ story }) => {
  const date = format(new Date(story.publishedAt), 'dd MMM yyyy')
  return (
    <Article backUrl='/'>
      <Head>
        <title>{story.metaTitle}</title>
      </Head>

      <div className='flex flex-col justify-center items-start'>
        <h1 className='text-4xl md:text-6xl font-bold m-4 w-[300px] md:w-[100%]'>
          {story.title}
        </h1>
        <p className='self-start -ml-6 md:ml-4 font-mono mb-10'>{date}</p>
        <Content body={story.body} />
      </div>
    </Article>
  )
}

export default Story

export const getStaticPaths = async () => {
  const query = `*[_type == 'story'] {
        slug {
            current
        }
    }`

  const storys = await client.fetch(query)

  const paths = storys.map((story) => ({
    params: {
      slug: story.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "story" && slug.current == '${slug}'][0]`

  const story = await client.fetch(query)

  return {
    props: {
      story,
    },
  }
}
