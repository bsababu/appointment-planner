import React from "react";
import {useState, useEffect} from 'react';
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone ] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicateName) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      
    }
  };

  useEffect(() => {
    for(const contact of props.contacts) {
      if (contact.name === name) {
        if (!duplicateName) {
          setDuplicateName(true);
          alert('Contact exists.');
        } 
        return;
      } else {
        setDuplicateName(false);
        alert('');
      }
    }

  }, [props.contacts, name, duplicateName])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name = {name} setName = {setName}
          email = {email} setEmail = {setEmail}
          phone = {phone} setPhone={setPhone}
          handleSubmit = {handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
