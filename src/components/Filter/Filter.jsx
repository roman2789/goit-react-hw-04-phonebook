import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './FilterStyled';

export const Filter = ({ filter, onFilter }) => {
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

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
