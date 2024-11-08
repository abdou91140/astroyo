import React from 'react';
import Link from 'next/link';

interface SignDetails {
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
}

interface SignItemProps {
    signDetails: SignDetails;
}

const SignItem: React.FC<SignItemProps> = ({ signDetails }) => {
    return (
        <Link legacyBehavior href={`/pages/sign/${signDetails.id}`} passHref>
            <a className="block max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="w-full h-48">
                    <img
                        src={signDetails.image}
                        alt={signDetails.name}
                        style={{ objectFit: 'cover' }}
                        className="object-scale-down rounded-t-lg object-contain h-48 w-full"
                    />
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl">{signDetails.unicode_symbol}</div>
                        <div>
                            <p className="text-xl font-semibold text-gray-800">{signDetails.name}</p>
                            <p className="text-sm text-gray-500">{signDetails.gloss}</p>
                        </div>
                    </div>
                    <div className="mt-3 text-gray-600">{signDetails.element}</div>
                    <div className="mt-2 text-sm text-gray-500">
                        <span>
                            <time dateTime={`${signDetails.date_start.month}-${signDetails.date_start.day}`}>
                                {signDetails.date_start.day}/{signDetails.date_start.month} - {signDetails.date_end.day}/{signDetails.date_end.month}
                            </time>
                        </span>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default SignItem;
