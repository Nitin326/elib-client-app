'use client'
import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = async () => {

  const response = await fetch('https://dummyjson.com/c/c4cb-ba60-4343-acd2',{cache:'no-store'});

  if(!response.ok){
    throw new Error()
  }

  const books: Book[] = await response.json()

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10'>
      {
        books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))
      }
    </div>
  )
}

export default BookList