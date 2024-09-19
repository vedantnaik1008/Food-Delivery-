import { NavLink, useLocation } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useUserInfo from '../hooks/useUserInfo';
import { useEffect } from 'react';

const Nav = () => {
    const {  setLogout, logout } = useLogout();
    const { userData, refetch  } = useUserInfo();
    
    const location = useLocation();

   
    console.log(location.pathname);
    const currentPage =
        location.pathname === '/user/signin' ||
        location.pathname === '/user/signup';
console.log(userData?.fullname);
console.log(logout);



    return (
        <nav>
            <ul className='flex gap-4 items-center justify-center font-semibold'>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to='/restuarants'>
                        Restuarants
                    </NavLink>
                </li>
                {/* <li</li> */}
                {/* {logout === false ? <></> : null} */}
                {!currentPage ? (
                    <>
                        <li>
                            <button onClick={() =>{ setLogout((prev)=> !prev)}}>
                                logout
                            </button>
                        </li>
                        <li className='flex justify-center items-center gap-2 bg-green-500 px-4 py-2 rounded-lg'>
                            <img
                                src={userData?.profileImageURL}
                                alt='user-img'
                                height={40}
                                width={40}
                                className='rounded-full'
                            />
                            <p>{userData?.fullname || 'not'}</p>
                        </li>
                    </>
                ) : null}
                {/* <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to='/user/signin'>
                        signin
                    </NavLink>
                </li>
                <li>
                    <button onClick={() => setLogout(true)}>logout</button>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to='/user/signup'>
                        signup
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default Nav;
