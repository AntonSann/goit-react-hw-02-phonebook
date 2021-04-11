import React from 'react';
import PropTypes from "prop-types";
import ContactListStyle from "./ContactList.module.css";

const ContactList = ({contacts, onDeleteContact}) =>(

    <ul>
        {contacts.map(contact => 
        <li key={contact.id}>
        {contact.name + ": " + contact.number}
        {
          <button
          className={ContactListStyle.button_delete}
            type="button"
            name="delete"
            onClick={()=>onDeleteContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>)}
    </ul>
    )

    ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}


export default ContactList;