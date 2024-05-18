import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

async function BookList() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: 'no-store'
  });
  if(!response.ok){
    throw new Error("An error occure while fetching the books");
  }

  const books = await response.json();

  return (
    <div className='grid grid-cols-3 gap-3 md:grid-cols-3 max-w-7xl mx-auto mb-8'>
      {
        books.map((book : Book) => (
          <BookCard key={book._id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList