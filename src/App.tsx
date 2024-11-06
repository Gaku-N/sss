import { MenuLogin } from './components/organisims/login/MenuLogin';
import { UserList } from './components/organisims/user/UserList';
import { Toaster } from './components/ui/toaster';
function App() {
  return (
    <>
      <MenuLogin />
      <UserList />
      <Toaster />
    </>
  );
}

export default App;
