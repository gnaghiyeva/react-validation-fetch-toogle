

import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import toogleCss from "./index.module.css"


const Toggle = () => {
 const [isGray, setIsGray] = useState(true)
    
     function handleClick(){
        setIsGray(!isGray)
    }

    return (
        <>
        <div className={toogleCss.container}>
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: isGray ? 'gray':'yellow',   
                }}
            />
          <Button onClick={handleClick}  variant="contained">Click me!</Button>
          </div>
        </>
    )
}

export default Toggle