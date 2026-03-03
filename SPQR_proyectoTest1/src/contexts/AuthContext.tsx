import { createContext, useContext, useState } from "react";

type User = {
    id: string,
    email: string,
    token?: string, 
} | null;

type AuthContextType = {
    user:  User;
    isAllowed: boolean;
    login: (email: string, password: string)=> boolean;
    // register: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) 
        throw new Error('useAuth debe usarse dentro del AuthProvider');
    
    return context;
}

type Children = {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Children) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState(false);

    const login = (email: string, password: string) => {
        const allowed = email.endsWith("@spqr.com");
        if (allowed) {
            setUser({ id: "1", email });
            setIsAllowed(true);
        }
        return allowed;
    }
        
    const logout = () => {
        setUser(null);
        setIsAllowed(false)
    }

    return (
        <AuthContext.Provider 
            value={{
                user, 
                isAllowed, 
                login, 
                // register:  (email: string, password: string) => false, 
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}
    
