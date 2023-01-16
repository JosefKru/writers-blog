import Link from 'next/link'

const Article = ({ children, backUrl }) => {
  return (
    <article className='relative pt-6 pr-16 pb-12 pl-10 md:pl-20 max-w-[1300px] m-0 my-auto box-border'>
      <Link href={backUrl}>
        <div className='absolute text-4xl left-4 md:left-12 md:text-5xl top-12 md:top-20 text-blue-900'>
          &larr;
        </div>
      </Link>
      <div className=''>{children}</div>
    </article>
  )
}

export default Article
