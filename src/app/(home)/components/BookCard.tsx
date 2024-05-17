import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BookCard( {book} : {book : Book}) {
  return (
    <div className='flex gap-5 border p-5 shadow-md rounded'>
        <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw'
        style={{width: "auto", height: "12rem", maxWidth: "110px"}} />
        <div>
            <h2 className='text-xl font-bold text-primary-600 text-balance line-clamp-2'>{book.title}</h2>
            <p className='mt-3 mb-7 font-bold text-primary-900'>{book.author.name}</p>
            <Link className='border border-primary-500 mt-5 rounded-md px-2 py-3 text-sm font-medium bg-primary-600
            text-primary-50 hover:text-primary-800 hover:bg-primary-50 transition' href={`/book/${book._id}`}>Read More</Link>
        </div>
    </div>
  )
}

export default BookCard