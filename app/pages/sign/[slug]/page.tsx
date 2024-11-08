"use client";

import React from 'react';
import { useSignContext } from "@/hooks/signContext";

interface Params {
    params: {
        slug: string;
    };
}

function SignDetails({ params }: Params) {
    const { signList } = useSignContext(); // Get the signList from context

    const sign = signList.find(sign => sign.id === parseInt(params.slug, 10));

    return (
        <div>
            <h1>{sign?.name}</h1>
        </div>
    );
}

export default SignDetails;
