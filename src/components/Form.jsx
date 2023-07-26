import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { bookSelector } from '../redux/books/booksSlice';
import { addBookThunk } from '../redux/books/booksSlice';

const Form = () => {
    const dispatch = useDispatch();
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const state = useSelector(bookSelector);

    const createNewBook = (e) => {
        e.preventDefault();

        const newBook = {
            item_id: new Date().toISOString(),
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory
        };

        dispatch(addBookThunk(newBook));
    }

    return (
        <div className="max-w-[1300px] m-auto mt-6">
            <h1 className='font-bold text-[1.3rem] text-slate-600'>Add New Book</h1>
            <form formNoValidate onSubmit={(e) => createNewBook(e)} className='w-full flex gap-4 mt-4 '>
                <input aria-errormessage='title required' required onChange={(e) => setBookTitle(e.target.value)} placeholder='Book title' className='w-full p-2 pl-4 font-thin text-slate-600 h-12 border rounded-md border-slate-300 focus:border-red-400 focus:border-2  outline-blue-300' type="text" />
                <input aria-errormessage='author required' required onChange={(e) => setBookAuthor(e.target.value)} placeholder='Autho Name' className='w-5/12 p-2 pl-4 font-thin text-slate-600 h-12 border rounded-md border-slate-300 focus:border-red-400 focus:border-2  outline-blue-300' type="text" />

                <select defaultValue={"business"} aria-errormessage='category required' required onChange={(e) => setBookCategory(e.target.value)} name="" className='w-[320px] rounded-md bg-white border px-4 pr-3 outline-blue-300 border-slate-300' id="">
                    <option value="fiction">Fiction</option>
                    <option value="life">Life</option>
                    <option value="love">Love</option>
                    <option value="friendship">Friendship</option>
                    <option selected value="business">business</option>
                    <option value="notification">Notification</option>
                </select>

                <button disabled={state.loading} type='submit' className='h-full p-3 text-white rounded-md active:bg-blue-500 bg-blue-400 w-[200px]'> {state.activityLoading ? <span>...loading</span> : <span>Add Book </span>} </button>
            </form>
        </div>
    )
}

export default Form