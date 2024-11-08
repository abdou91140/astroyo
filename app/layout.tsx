"use client";
import '@/styles/globals.css'; // Ensure this path is correct
import { SignProvider } from '@/hooks/signContext';


export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {    return (
    <html lang="en">

    <body>
    <SignProvider>
        {children}
    </SignProvider>
    </body></html>
    );
    };

