import React, { useEffect } from 'react'
import Book from '../components/Book';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bookSelector } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';
import { fetchBooksThunk } from '../redux/books/booksSlice';
import Form from '../components/Form';

const Books = () => {
    const state = useSelector(bookSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksThunk());
    }, [])
    return (
        <div>
            <ul className='min-h-[calc(100vh-100px)] flex flex-col gap-4 p-4'>
                {state.books.length > 0 && state.books.map((book) => (
                    <Book
                        category={book.category}
                        author={book.author}
                        title={book.title}
                        key={book.item_id}
                        percentages={book.percentages}
                        id={book.item_id}
                        loading={book.loading}
                    />))}

                {
                    (state.books.length < 1 && !state.loading) && <div className="h-full flex items-center justify-center">
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
        </div>
    )
}

export default Books