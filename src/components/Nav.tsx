import { NavLink, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useUserInfo from "../hooks/useUserInfo";


const Nav = () => {
   const { logout, setLogout } = useLogout()
   const { userData } = useUserInfo();
   const location = useLocation()
   console.log(location.pathname);
   const currentPage =
       location.pathname === '/user/signin' ||
       location.pathname === '/user/signup'

    return (
        <nav>
            <ul className='flex gap-4 items-center justify-center text-black font-semibold'>
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
                {/* <li><img src={userData?.profileImageURL} alt="user-img" height={50} width={50}/></li> */}
                {/* {logout === false ? <></> : null} */}
                {!currentPage ? <><li>
                    <button onClick={() => setLogout(true)}>logout</button>
                </li><li><p>{userData?.fullname}</p></li></> : null}
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
}

export default Nav
