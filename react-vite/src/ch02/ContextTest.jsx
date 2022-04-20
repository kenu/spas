import { UserProvider } from './contexts/User';

import Header from './Header';
import Main from './Main';

export default () => {
  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  );
};
