import React from 'react'

const Form = () => {
    return (
        <div className="max-w-[1300px] m-auto mt-6">
            <h1 className='font-bold text-[1.3rem] text-slate-600'>Add New Book</h1>
            <div className='w-full flex gap-4 mt-4 '>
                <input placeholder='Book title' className='w-full p-2 pl-4 font-thin text-slate-600 h-12 border border-slate-300 outline-blue-300' type="text" />
                <select name="" className='w-[320px] bg-white border px-4 pr-3 outline-blue-300 border-slate-300' id="">
                    <option value="action">Action</option>
                    <option value="life">Life</option>
                    <option value="love">Love</option>
                    <option selected value="friendship">Friendship</option>
                    <option selected value="friendship">business</option>
                </select>

                <button className='h-full p-3 text-white rounded-md active:bg-blue-500 bg-blue-400 w-[200px]'>Add Book</button>
            </div>
        </div>
    )
}

export default Form