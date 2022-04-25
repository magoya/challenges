import Button from "./Button";
import TextInput from "./TextInput";

const NewItemForm = ({ handleSubmit, handleTextChange }) => {
  return (
    <div className="NewItemForm">
      <h4>Create new Item</h4>
      <Button label="New Item" onClick={handleSubmit} />
      <TextInput label="Input the item name" onChange={handleTextChange} />
    </div>
  );
};

export default NewItemForm;
