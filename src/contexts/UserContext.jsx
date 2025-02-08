import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: '',
    email: '',
    isLoggedIn: false
  });

  const login = (username, email) => {
    setUser({
      username,
      email,
      isLoggedIn: true
    });
  };

  const logout = () => {
    setUser({
      username: '',
      email: '',
      isLoggedIn: false
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);