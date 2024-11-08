"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import SignsJSON from '../api/signs.json'; // Load the initial sign data

// Define the type for a single sign item based on the structure of SignsJSON
type Sign = {
    // Define fields based on actual structure in SignsJSON, for example:
    id: string;
    image: string;
    name: string;
    unicode_symbol: string;
    gloss: string;
    element: string;
    date_start: {
        day: number;
        month: number;
    };
    date_end: {
        day: number;
        month: number;
    };
    // Add other fields as per SignsJSON structure
};

// Define the context value type
interface SignContextType {
    signList: Sign[];
    setSignList: React.Dispatch<React.SetStateAction<Sign[]>>;
}

// Initialize the context with an empty default value
const SignContext = createContext<SignContextType | undefined>(undefined);

// Define the provider props type
interface SignProviderProps {
    children: ReactNode;
}

// Create a provider component
export const SignProvider: React.FC<SignProviderProps> = ({ children }) => {
    const [signList, setSignList] = useState<Sign[]>(SignsJSON);

    return (
        <SignContext.Provider value={{ signList, setSignList }}>
            {children}
        </SignContext.Provider>
    );
};

// Create a custom hook to use the sign context
export const useSignContext = (): SignContextType => {
    const context = useContext(SignContext);
    if (!context) {
        throw new Error('useSignContext must be used within a SignProvider');
    }
    return context;
};
