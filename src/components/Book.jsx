import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBookThunk } from '../redux/books/booksSlice';

const Book = ({ title, author, category, id, loading }) => {
    const [canDelete, setCanDelete] = useState(false);
    const dispatch = useDispatch();

    const deleteBook = async () => {
        dispatch(removeBookThunk(id));
    }

    return (
        <li className='w-full bg-white  max-h-[8.5rem] rounded-md border border-slate-300 flex px-4 py-6'>
            <div className=" basis-4/5 h-full border-r">
                <h3 className=' text-[1.2rem] text-slate-600'>{author}</h3>
                <h2 className='mt-2 text-[1.2rem] font-bold text-slate-700'>{title}</h2>
                <p className='mt-1 pb-4 text-slate-500'>{category}</p>
            </div>

            {!canDelete ? (
                <div className="flex items-center w-1/5 h-full  justify-end   pl-7">
                    <button onClick={() => setCanDelete(true)} className='px-10 py-4 active:bg-red-300 active:text-red-600 mt-3 text-red-500 rounded-md bg-red-200 border-2 border-red-300'>
                        Delete
                    </button>
                </div>
            ) : (
                <div className=' flex gap-4 ml-4'>
                    <button onClick={() => deleteBook()} className='px-2 h-16 py-2 text-sm active:bg-red-300 active:text-red-600 mt-3 text-red-500 rounded-md bg-red-200 border-2 border-red-300'>
                        {!loading ? <span>Delete anywhere</span> : <span>...loading</span>}
                    </button>

                    <button onClick={() => setCanDelete(false)} className='px-5 h-16 py-2 active:bg-green-300 active:text-green-600 mt-3 text-green-500 rounded-md bg-green-200 border-2 border-green-300'>
                        cancel
                    </button>
                </div>

            )
            }

        </li>
    )
}

export default Book