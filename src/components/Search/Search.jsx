/* eslint-disable react/prop-types */
// SearchInput.js
import style from "./search.module.css"
const SearchInput = ({ searchTerm, onChange }) => {
  return (
    <div>
    <label htmlFor="search" className={style.label}>Filter</label>
      <input
        id="search"
        autoComplete="off"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
};

export default SearchInput;
