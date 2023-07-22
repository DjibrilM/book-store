import React from 'react'
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
    return (
        <>
            <ul className='max-w-[1300px] pr-10 h-[calc(100vh-250px)] books-container flex flex-col gap-4  overflow-auto  border m-auto mt-10'>
                <Book />
            </ul>
            <Form />
        </>
    )
}

export default Books