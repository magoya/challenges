import { useState, useEffect } from "react";

const TextInput = ({ label, onChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(value);
  };
  return <input type="text" placeholder={label} onChange={handleChange} />;
};

export default TextInput;
