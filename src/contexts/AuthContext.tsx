// src/contexts/AuthContext.tsx
import{
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import { onAuthStateChanged, User } from "firebase/auth";
  import { auth } from "../firebase";
  
  interface AuthContextType {
    user: User | null;
    loading: boolean;
  }
  
  const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
  });
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // subscribe to user state changes
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
      return unsubscribe; // unsubscribe on unmount
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, loading }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  // custom hook for convenience
  export function useAuth() {
    return useContext(AuthContext);
  }