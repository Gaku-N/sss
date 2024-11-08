import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuLogin } from './components/organisims/login/MenuLogin';
import { UserList } from './components/organisims/user/UserList';
import { Toaster } from './components/ui/toaster';
import { UserProvider } from './providers/UserProvider';
function App() {
  return (
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
  );
}

export default App;
