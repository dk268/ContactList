import React from 'react';
import ReactDOM from 'react-dom';



const ContactRow = (props) => (
      props.contacts.map(contact => <tr key={contact.id} onClick={() => props.selectContact(contact.id)}>
          <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
        </tr>)
)


export default ContactRow;
