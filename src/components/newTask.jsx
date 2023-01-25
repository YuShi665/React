import { useState } from "react"
import React from 'react'

const NewTask = () => {
    const [weather, setWeathger] = useState;


    return <h2>今天天气{weather?'hot':'not hot' }</h2>

    
}
export default NewTask