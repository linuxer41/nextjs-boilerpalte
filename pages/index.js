import Layout from "../components/layouts/default"
import React from "react";

const parrafos = ()=>{
    var array = []
    for (let index = 0; index < 60; index++) {
        array.push(<p key={index}>hola mundo {index}</p>);
        
    }
    return array
}
const Index =(props)=>{
    const env = process.env.customKey
    const parrafo = parrafos()
    return(
        <Layout pageTitle="index">
            {parrafo}
        </Layout>
    )
}
export default Index;
// max-width: 1032px!important;