import Image from 'next/image'
import React from 'react'
import book from '../../public/book.png';
import paperbg from '../../public/paper-bg.jpg'

function Banner() {
  return (
    <div className='max-w-7xl mx-auto px-5 py-10'>
        <div className='relative'>
            <Image src={paperbg}
            alt='Banner Image'
            className='h-72 w-full rounded-lg'
            height={0}
            width={0}
            sizes='100vw'
            />
            <div className='absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30'>
            </div>
            <Image 
            alt='Book'
            src={book}
            className='absolute bottom-0 right-5'
            width={0}
            height={0}
            sizes='100vw'
            style={{width: 'auto', height: '18rem'}}
            />
            <h3 className='absolute left-10 top-1/2 font-semibold w-full max-w-3xl text-5xl text-primary-50 -translate-y-1/2 tracking-tight'>
                Connect, share and Trade Your Favorite Reeds.
            </h3>
        </div>
    </div>
  )
}

export default Banner