import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your name" value={name} 
      onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Phone number" 
      value={phone} onChange={(e) => setPhone(e.target.value)} 
      pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
      <input type="text" placeholder="Email address" value={email}
       onChange={(e) => setEmail(e.target.value)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};
