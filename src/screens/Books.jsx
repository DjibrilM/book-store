import React, { useEffect } from 'react'
import Book from '../components/Book';
import Form from '../components/Form';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bookSelector } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';
import { fetchBooksThunk } from '../redux/books/booksSlice';

const Books = () => {
    const state = useSelector(bookSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksThunk());
    }, [])
    return (
        <>
            <ul className='max-w-[1300px]  pr-10 h-[calc(100vh-250px)] books-container flex flex-col gap-4  overflow-auto  border m-auto mt-10'>
                {state.books.length > 0 && state.books.map((book) => (
                    <Book
                        category={book.category}
                        author={book.author}
                        title={book.title}
                        key={book.item_id}
                        id={book.item_id}
                        loading={book.loading}
                    />))}

                {
                    state.books.length && !state.loading < 1 && <div className="h-full flex items-center justify-center">
                        <p>No book available  😓</p>
                    </div>
                }

                {
                    state.loading &&
                    (
                        <div className="h-full flex items-center justify-center">
                            <p>...loading</p>
                        </div>
                    )
                }
            </ul>
            <Form />
        </>
    )
}

export default Books