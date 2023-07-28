import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBookThunk } from '../redux/books/booksSlice';
import ProgressBar from 'react-customizable-progressbar'


const Book = ({ title, author, category, id, loading, percentages }) => {
    const [canDelete, setCanDelete] = useState(false);
    const dispatch = useDispatch();

    const deleteBook = async () => {
        if (loading) return;
        dispatch(removeBookThunk(id));
    }

    return (
        <li className='w-full bg-[#fff]   max-h-[25rem] h-full rounded-sm border border-slate-300 flex px-4 py-6'>
            <div className=" basis-3/5 h-full pl-5 ">
                <h3 className=' text-[1.2rem] text-gray-500 text-md font-bold roboto'>{category}</h3>
                <h2 className='text-[1.2rem] text-2xl font-bold text-slate-700'>{title}</h2>
                <p className='mb-2 relative bottom-1 pb-4 text-blue-500 roboto text-sm'>{author}</p>

                <div className="flex gap-3  text-blue-500 text-sm font-light roboto">
                    <span className=' cursor-pointer'>comment |</span>
                    {!canDelete && <span onClick={() => setCanDelete(true)} className='cursor-pointer'> remove |</span>}
                    {canDelete && <div className=" flex gap-4 "><span className='cursor-pointer text-green-500 rounded-md bg-green-100 p-2  relative bottom-1' onClick={() => setCanDelete(false)}> cancel</span> <span className='cursor-pointer text-red-400 bg-red-100 p-2 rounded-md relative bottom-1' onClick={() => deleteBook()} > {loading ? <>...loading </> : <strong className=''>Continue</strong>} </span></div>}
                    <span className='cursor-pointer'>edit </span>
                </div>
            </div>

            <div className="px-4 h-full border-r flex items-center gap-3 mt-3">
                <ProgressBar
                    strokeColor='#307bbe'
                    className='w-10'
                    strokeWidth={8}
                    radius={40}
                    trackStrokeWidth={8}
                    pointerStrokeWidth={8}
                    progress={percentages} />

                <div className="">
                    <h1 className='text-4xl'> <span>{percentages}</span>%</h1>
                    <p className='text-md text-slate-400 mt-3'>completed</p>
                </div>
            </div>


            <div className="items-center w-1/5 h-full    pl-7">
                <p className='pt-2 text-slate-500'>Current Chapter</p>
                <p className=' mt-1'>Chapter 17</p>
                <button className=' bg-blue-500 text-white w-[200px] mt-4 p-2 rounded-md'>Update progress</button>
            </div>

        </li>
    )
}

export default Book