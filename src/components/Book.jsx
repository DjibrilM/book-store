import React from 'react'

const Book = () => {
    return (
        <li className='w-full bg-white h-[calc(100vh-200px)] max-h-[7.5rem] border border-slate-300 flex px-4 py-6'>
            <div className=" basis-4/5 h-full border-r">
                <h3 className=' text-[1.2rem] text-slate-600'>Life</h3>
                <h2 className='mt-4 text-[1.2rem] font-bold text-slate-700'>Ego Is The Enemy</h2>
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