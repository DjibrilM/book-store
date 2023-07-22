import React from 'react'

const Book = ({ title, author, category }) => {
    return (
        <li className='w-full bg-white  max-h-[8.5rem] border border-slate-300 flex px-4 py-6'>
            <div className=" basis-4/5 h-full border-r">
                <h3 className=' text-[1.2rem] text-slate-600'>{author}</h3>
                <h2 className='mt-2 text-[1.2rem] font-bold text-slate-700'>{title}</h2>
                <p className='mt-1 pb-4 text-slate-500'>{category}</p>
            </div>

            <div className="flex items-center w-1/5 h-full  justify-end   pl-7">
                <button className='px-10 py-4 active:bg-red-300 active:text-red-600 mt-3 text-red-500 rounded-md bg-red-200 border-2 border-red-300'>
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Book