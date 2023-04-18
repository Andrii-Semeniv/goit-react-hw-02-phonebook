import ContactItem from 'components/contactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactItem
              id={id}
              key={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          )
      )}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
