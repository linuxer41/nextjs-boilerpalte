import React from "react";
import Head from "next/head"
const Index =()=>{
    const env = process.env.customKey
    return(
    <>
    <Head>
        <title>my about</title>
    </Head>
    <div>about: {env}</div>

    </>)
    
}
export default Index;