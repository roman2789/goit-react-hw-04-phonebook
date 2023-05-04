import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './FilterStyled';

const Filter = ({ filter, onFilter }) => {
  return (
    <FilterBox>
      <label>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={onFilter}
          value={filter}
        />
      </label>
    </FilterBox>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
