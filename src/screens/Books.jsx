import React from 'react'
import Book from '../components/Book';
import Form from '../components/Form';


const books = [
    {
        title: "Ego is the enemy",
        author: "Ryan Holiday",
        category: "Life"
    },
    {
        title: "Ryan Holiday",
        author: "The Obstacle Is the Way",
        category: "Life",
    },
    {

        title: "Business @ the Speed of Thought",
        author: "Bill gates",
        category: "business",
    }
]

const Books = () => {
    return (
        <>
            <ul className='max-w-[1300px]  pr-10 h-[calc(100vh-250px)] books-container flex flex-col gap-4  overflow-auto  border m-auto mt-10'>
                {books.map((book, index) => (
                    <Book
                        category={book.category}
                        author={book.author}
                        title={book.title} key={index}
                    />))}
            </ul>
            <Form />
        </>
    )
}

export default Books