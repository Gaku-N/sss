import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuLogin } from './components/organisims/login/MenuLogin';
import { UserList } from './components/organisims/user/UserList';
import { Toaster } from './components/ui/toaster';
import { UserProvider } from './providers/UserProvider';
import { Provider } from './components/ui/provider';
// import { theme } from './theme/Brand';
function App() {
  return (
    <Provider >
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<MenuLogin />}
            />
            <Route
              path='userlist'
              element={<UserList />}
            />
            {/* <MenuLogin /> */}
            {/* <UserList /> */}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </UserProvider>
    </Provider>
  );
}

export default App;
