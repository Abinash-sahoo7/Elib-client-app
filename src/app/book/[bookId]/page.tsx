import { Book } from '@/types';
import Image from 'next/image';
import React from 'react'

async function SingleBookPage({params} : { params :{bookId: string}}) {
    console.log("params" + params);
    let book : Book | null = null; 
    
    try{
        const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookId}`);
        if(!response.ok){
            throw new Error('Error in Fetching the book');
        }
        book = await response.json(); 
        console.log(book);
    }
    catch(err: any){
        throw new Error('Error in Fetching the book');
    }

    if(!book){
        throw new Error('Book not Found');
    }

  return (
    <div className='max-w-6xl mx-auto gap-5 px-4 py-6 grid grid-cols-3'>
        <div className='col-span-2 text-primary-950 pr-16'>   
            <h1 className='text-5xl font-bold mb-5 leading-[1.1]'>{book.title}</h1>
            <p className='font-semibold'>by {book.author.name}</p>
            <p>{book.description}</p>
            <button>Download this Book</button>
        </div>
        <div className='flex justify-end'>
            <Image sizes='100vh' style={{ width: "auto", height: "auto"}} src={book.coverImage} alt={book.title} width={0} height={0} className='rounded-md border'/>
        </div>
    </div>
  )
}

export default SingleBookPage