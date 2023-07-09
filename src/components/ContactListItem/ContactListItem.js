import PropTypes from 'prop-types';

// import {
//   ContactItem,
//   ContactName,
//   ContactNumber,
//   Button,
// } from './ContactListItem.module';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      <span>
        {name}:<span>{number}</span>
      </span>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};