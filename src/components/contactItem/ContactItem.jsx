import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <li>
        {name}: {number}
        <button onClick={() => onDelete({ id })}>Delete</button>
      </li>
    </div>
  );
};
export default ContactItem;

ContactItem.prototype = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
