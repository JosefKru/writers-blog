import Link from 'next/link'
import React from 'react'

const StoryGrid = ({ description, slug, title }) => {
  return (
    <Link href={`/story/${encodeURIComponent(slug.current)}`}>
      <div className='m-4 p-6 h-60 w-80 rounded-lg border-2 transition-all duration-150 ease-in max-w-[300px] hover:text-[#0070f3] hover:border-[#0070f3]'>
        <h2 className='mb-4 text-2xl font-bold'>{title} &rarr;</h2>
        <p className='m-0 text-xl leading-6'>{description}</p>
      </div>
    </Link>
  )
}

export default StoryGrid
