import Nav from "./Nav"

export type User = {
    userData: {_id: string;
    email: string;
    fullname: string;
    profileImageURL: string;
    role: string;}
};

const Header = () => {
    return (
        <header className='bg-black text-white flex items-center justify-between p-5'>
            {/* <img src="" alt="logo" /> */}
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <Nav />
        </header>
    );
};

export default Header
