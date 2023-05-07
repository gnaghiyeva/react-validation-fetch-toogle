import { Alert, Button, TextField } from '@mui/material'
import validationCss from "./index.module.css"
import React, { useState } from 'react'
import { Divider } from 'antd'

const Validation = () => {
  let [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(false);
  const [items, setItems] = useState([])

  function handleChange(e) {
    let inputValue = e.target.value;
    setInputValue(inputValue)
    setError(inputValue.length < 5 || !(inputValue.match(/[A-Z]/)));
  }
  
  function handleClick() {
    if (!error && inputValue) {
      setItems([...items, inputValue])
      setInputValue("");
    }
  };

  return (
    <>
    <Divider></Divider>
      <div className={validationCss.container}>
        <TextField
          onChange={handleChange}
          style={{ border: error ? "1px solid red" : "" }}>
        </TextField>
        {error && <p style={{ color: "red" }}>Error!</p>}
        <Button disabled={error || ""} variant="contained" onClick={handleClick} >Add</Button>
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', listStyleType:'none' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Validation