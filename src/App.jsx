import { RouterProvider } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { router } from './routes/Routes';
import { refreshUser } from './utils/refreshUser';

function App() {
    const { isLoggedIn, user } = useAuth();
    // console.log('user logged in' + '-' + isLoggedIn);
    const loading = false;
    // console.log(loading, user, isLoggedIn);

    refreshUser();

    return loading ? <div>checking ...</div> : <RouterProvider router={router}></RouterProvider>;
}

export default App;
