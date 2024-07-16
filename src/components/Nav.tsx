import { NavLink } from "react-router-dom";


const Nav = () => {
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
              <li>
                  <NavLink
                      className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                      }
                      to='/user/signin'>
                      signin
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                      }
                      to='/user/signup'>
                      signup
                  </NavLink>
              </li>
          </ul>
      </nav>
  );
}

export default Nav
