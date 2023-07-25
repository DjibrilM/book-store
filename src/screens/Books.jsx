import React from 'react'
import Book from '../components/Book';
import Form from '../components/Form';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bookSelector } from '../redux/books/booksSlice';

const Books = () => {
    const books = useSelector(bookSelector);
    return (
        <>
            <ul className='max-w-[1300px]  pr-10 h-[calc(100vh-250px)] books-container flex flex-col gap-4  overflow-auto  border m-auto mt-10'>
                {books.length > 0 && books.map((book, index) => (
                    <Book
                        category={book.category}
                        author={book.author}
                        title={book.title}
                        key={index}
                        id={book.item_id}
                    />))}

                {books.length < 1 && <div className="h-full flex items-center justify-center">
                    <p>No book available  😓</p>
                </div>}
            </ul>
            <Form />
        </>
    )
}

export default Books