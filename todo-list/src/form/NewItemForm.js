import React, { useState } from 'react';
import Button from './Button'
import TextInput from './TextInput';

function NewItemForm(props) {
  return (
    <div className="NewItemForm">
      <h4>Create new Item</h4>
      <Button label="New Item" onClick={props.handleSubmit}/>
      <TextInput label="Input the item name" onChange={props.handleTextChange} />
    </div>
  );
}

export default NewItemForm