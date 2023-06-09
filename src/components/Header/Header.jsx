import React, { useContext } from 'react';
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-gradient-to-r from-gray-800 to-slate-800  px-7 text-xl ">
            <div className="navbar-start">
                <div className="dropdown bg-slate-500 rounded-3xl mr-6">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li tabIndex={0}>
                            <Link to="/alltoys" className="justify-between">
                                All Toys
                            </Link>

                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                        {user ? <div className='flex'>
                            <li><Link to="/mytoys">My Toys</Link></li>
                            <li><Link to="/addatoy">Add A Toy</Link></li>
                        </div>
                            :
                            ""
                        }

                    </ul>
                </div>
                <div className=' rounded-full flex md:flex-row flex-col  gap-x-2 items-center '>
                    <div >
                        <img className=' rounded-full md:w-16 w-8 ' src={logo} alt="" />
                    </div>
                    <div>
                        <h2 className='text-white md:text-xl font-extralight text-xs'>CarMagination</h2>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/alltoys">
                            All Toys
                        </Link>
                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                    {user ? <div className='flex'>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addatoy">Add A Toy</Link></li>
                    </div>
                        :
                        ""
                    }

                </ul>
            </div>
            <div className="navbar-end">


                {user ?
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                            <img src={user?.photoURL} title={user?.displayName} />
                        </div>
                        <Link onClick={handleLogOut} className='btn'>LogOut</Link>
                    </div>
                    :
                    <Link to="/login" className='btn'>Login</Link>}
            </div>
        </div>
    );
};

export default Header;