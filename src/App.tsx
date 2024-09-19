import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/Header';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
    
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header />
                <main className=''>
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                    </Routes>
                </main>
            </QueryClientProvider>
        </>
    );
}

export default App;
