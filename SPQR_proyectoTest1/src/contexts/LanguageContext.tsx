

import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js";

type Language = 'es' | 'en' | 'de';

type LanguageContextType = {
    language: Language;
    changeLanguage: (lng: Language) => void;
};

const translations= {
    en: {
        screenSignInTitle : "Sign In",
        signUp : "Sign Up",
        email: "Email",
        welcome: "Welcome",
        inptEmail: "Enter your email",
        btnExit : "Exit",
        btnSignIn : "Sign In",
        btnRestorePassword : "Restore Password",
        inptPassword: "Enter your password"
    },
    es: {
        screenSignInTitle : "Iniciar Sesión",
        signUp : "Registrarse",
        email: "Correo Electrónico",
        welcome: "Bienvenido",
        inptEmail: "Ingrese su correo electrónico",
        btnExit : "Salir",
        btnSignIn : "Iniciar Sesión",
        btnRestorePassword : "Restaurar Contraseña",
        inptPassword: "Ingrese su contraseña"
    },
    de: {
        screenSignInTitle : "Anmelden",
        signUp : "Registrieren",
        email: "E-Mail",
        welcome: "Willkommen",
        inptEmail: "Geben Sie Ihre E-Mail-Adresse ein",
        btnExit : "Beenden",
        btnSignIn : "Anmelden",
        btnRestorePassword : "Passwort wiederherstellen",
        inptPassword: "Geben Sie Ihr Passwort ein"
    }
}

const i18n = new I18n(translations);

i18n.defaultLocale = 'en';
i18n.enableFallback = true;

// 1. Definir el contexto
const LanguageContext = createContext<LanguageContextType | null>(null);

// 2. Utilizar el contexto: Hook Personalizado
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage debe suarse dentro de LanguageProvider');
    return (context);
}

// 3. Definicion de Context Provider
export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const [language, setLanguage] = useState<Language>("es");

    useEffect( () => 
        {
            const loadLanguage = async () => {
                const storedLanguage = await AsyncStorage.getItem('language') as Language;
                if (storedLanguage) {
                    setLanguage(storedLanguage);
                    i18n.locale = storedLanguage;
                }else{
                    i18n.locale = i18n.defaultLocale;
                }
            }
            loadLanguage();
        },[]
    )

    const changeLanguage = async (lng: Language) => {
        setLanguage(lng);
        i18n.locale = lng;
        await AsyncStorage.setItem('language', lng);
    }
    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {i18n}