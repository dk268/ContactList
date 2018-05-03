import React from 'react';
import ReactDOM from 'react-dom';
import ContactRow from './ContactRow'

const ContactList = (props) => {
    return <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          <ContactRow contacts={props.contacts} selectContact={props.selectContact} />
        </tbody>
      </table>;}


export default ContactList;
