"use client";

import React from 'react'
import {useSignContext} from "@/hooks/signContext";

function SignDetails({params}: {params: {slug: number}}) {

    const {signList} = useSignContext(); // Get the signList from context

    const sign = signList.find(sign => sign.id === parseInt(params.slug));
    return (
        <div>
            <h1>{sign && sign.name} </h1>
        </div>
    )
}

export default SignDetails
