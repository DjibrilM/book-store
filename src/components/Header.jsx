import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full p-4 h-24 border-b bg-white '>
            <div className="max-w-[1300px] h-full m-auto flex gap-32 items-center">
                <Link to={"/"}>
                    <h1 className=' font-semibold text-blue-500 text-[1.4rem]'>Bookstore <strong className=' font-extrabold'>CMS</strong> </h1>
                </Link>

                <nav>
                    <ul className='flex gap-5 '>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-slate-600  text-sm  duration-100" : "text-slate-400 text-sm  duration-100"
                        } to={"/"} >
                            <li className=''>Books</li>
                        </NavLink>

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-slate-600 text-sm   duration-100" : "text-slate-400 text-sm  duration-100"
                        } to={"categories"} >
                            <li>CATGEORIES</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header