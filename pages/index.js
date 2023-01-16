import Head from 'next/head'
import Image from 'next/image'
import StoryGrid from '../components/StoryGrid'
import { client } from '../lib/client'

export default function Home({ storys }) {
  return (
    <div className='px-8'>
      <Head>
        <title>Konstantin Sedkin</title>
        <meta name='description' content='Blog writer Konstantin Sedkin' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-[100vh] flex-1 py-16 flex flex-col justify-center items-center'>
        <h1 className='m-0 text-4xl md:text-6xl leading-5'>
          Welcome <span className='text-[#0070f3]'>ёпт</span>
        </h1>

        <p className='m-16 leading-6 text-base md:text-2xl'>
          Константён Седкин{' '}
          <span className='bg-[#fafafa] rounded-md p-3 text-base hidden md:inline-block'>
            ето моё блок псателя
          </span>
        </p>

        <div className='flex flex-wrap justify-center items-center'>
          {storys.map((obj) => (
            <StoryGrid key={obj.slug.current} {...obj} />
          ))}
        </div>
      </main>

      <footer className='flex flex-1 py-8 border-t-2 border-[#eaeaea] justify-center items-center'>
        <a
          href='#'
          rel='noopener noreferrer'
          className='flex flex-grow-[1] justify-center items-center'
        >
          <span className='inline-block'>
            <Image src='/logo.svg' alt='Logo' width={72} height={16} />
          </span>
          <span className='mt-3 -ml-5 font-bold'>onstantёn</span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'story'] | order(_createdAt) {
    content,
    description,
    metaTitle,
    publishedAt,
    slug,
    title,
    _createdAt,
    _id
  }`
  const storys = await client.fetch(query)

  return {
    props: {
      storys,
    },
  }
}
