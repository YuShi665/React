import { useState } from "react"
import React from 'react'

function NewTask() {
    

    const handler = (e,msg) => {
        console.log({e,msg});
   }


    return <h2 onClick={(e)=>handler(e,"ss")}>今天天气</h2>

    
}
export default NewTask