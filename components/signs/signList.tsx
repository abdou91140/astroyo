import React from 'react';
import { useSignContext } from '@/hooks/signContext';
import SignItem from './signItem';

interface SignListProps {
    search: string;
}

const SignList: React.FC<SignListProps> = ({ search }) => {
    const { signList } = useSignContext();

    const filteredSigns = signList.filter(sign => {
            return sign.name.toLowerCase().includes(search.toLowerCase());
        }
    );
    console.log(search)
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
            {filteredSigns.length > 0 ? (
            filteredSigns.map(sign => (
                <div key={sign.id} >
                <SignItem signDetails={sign} />
                </div>
                ))
            ) : (
                <p className="text-gray-500 text-center mt-4">No signs found.</p>
            )}
        </div>
    );
};

export default SignList;
