import { FC } from "react";
// import MaterialIcon from "@component/atoms/materialIcon";
import styles from "@styles/atoms/searchInput.module.scss";
import { Search } from "@mui/icons-material";

// export interface SearchInputProps extends HTMLInputElement {}
export interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Cari judul/author/keyword",
}) => {
  return (
    <label className={styles.label}>
      <input
        type="text"
        placeholder={placeholder}
        className="b-typography__subtitle-1--medium b-color-text__onsurface--high-emphasis"
      />
      <Search className="b-color-text__onsurface--high-emphasis" />
      {/* <MaterialIcon
        icon="search"
        className="b-color-text__onsurface--high-emphasis"
      /> */}
    </label>
  );
};

export default SearchInput;
