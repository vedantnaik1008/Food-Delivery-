import Nav from "./Nav"

const Header = () => {
  return (
      <header className='flex items-center justify-between w-[95%] py-5 mx-auto'>
          {/* <img src="" alt="logo" /> */}
          <h1 className='text-3xl font-bold underline text-black'>
              Hello world!
          </h1>
          <Nav />
      </header>
  );
}

export default Header
