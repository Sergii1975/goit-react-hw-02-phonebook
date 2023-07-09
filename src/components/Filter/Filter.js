import PropTypes from 'prop-types';
// import { Label, Input } from './Filter.module';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};