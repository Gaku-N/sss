import { MenuLogin } from './components/organisims/login/MenuLogin';
import { UserList } from './components/organisims/user/UserList';
import { Toaster } from './components/ui/toaster';
import { UserProvider } from './providers/UserProvider';
function App() {
  return (
    <>
    <UserProvider>
      <MenuLogin />
      <UserList />
      <Toaster />
    </UserProvider>
    </>
  );
}

export default App;
