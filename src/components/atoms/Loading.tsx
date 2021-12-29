import React from "react";
import en from "../../assets/lang/en.json"

type LoadingProps={
    isLoading:boolean
}

const Loading = ({isLoading}:LoadingProps)=>{
    return <img src="" alt={en.loading} />
}
export default Loading;