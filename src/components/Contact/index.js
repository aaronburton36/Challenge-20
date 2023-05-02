import React from 'react';

function Contact({ name, email, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Contact;
