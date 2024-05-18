import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

function BookList({books} : {books : Book[] }) {
  return (
    <div className='grid grid-cols-3 gap-3 md:grid-cols-3 max-w-7xl mx-auto mb-8'>
      {
        books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList