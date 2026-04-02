import { createContext, useContext, useState } from "react";

export type User = {
  id?: number;
  name: string;
  avatar?: string;
};

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// create context
export const UserContext = createContext<UserContextType | undefined>(undefined);

// provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};