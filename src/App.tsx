import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main className='w-[90%] mx-auto'>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </main>
        </>
    );
}

export default App;
