import { useState } from 'react';
import './TextInput.css'

function TextInput(props) {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
    props.onChange(value)
  }
  return (
    <input type="text" name="props.name" value={value} placeholder={props.label} onChange={handleChange}/>
  );
}

export default TextInput