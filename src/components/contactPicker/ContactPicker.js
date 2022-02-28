import React from "react";

export const ContactPicker = (props) => {
  const handleChange = ({target}) => {
    const {value} = target;
    props.setContact(value)
  };
  return (
    <select onChange={handleChange} required>
      <option value="">No contacts</option>
        {
          props.contacts.map((element, index) => {
            return <option selected="selected" value={element.name} key={index}>{element.name}</option>
          })
        }
    </select>
  );
};
